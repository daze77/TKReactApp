/* eslint-disable no-trailing-spaces */
const orm = require( './db/orm.mongoose' )
const sessionManager = require( './session-manager' )

// session checking middleware
async function authRequired(req, res, next){
   // check session set, and it's valid
   const sessionData = sessionManager.verifyAndLoad( req.headers.session )
   if( !sessionData ){
      console.log( `[${req.method} ${req.url}] .. [authRequired] invalid session, refusing (403)` )
      res.status(403).send({ status: false, message: 'Requires valid session. Please login again.' })
      return
   }
   console.log( `[${req.method} ${req.url}] .. [authRequired] session GOOD` )
   // session was good, pass info on, let's continue endpoint processing...
   req.sessionData = sessionData
   next()
}

function router( app ){
   // This is a sample test API key.
   const stripe = require("stripe")('sk_test_51JzCTiJvID62zcJ68B18msCM9E17M9OSzxyNF5746507gKM8peVUt4tUMd2HWQeC9pAbdAFJBDTgViW9c8tL6l3p00tDzWeqvC');

   async function calCosts(b){

      let totalBasketCost = 0
      let priceList =[]

      for (let i=0; i<b.length; i++){

         if(b[i].page === "GalleryCollection"){
            let [results] = await orm.getGALPrice(b[i].id, b[i].clickedItem)
            
            priceList.push({
               id: results._id, 
               imageName: b[i].imageName,
               page: b[i].page,
               title: b[i].title,
               url: b[i].url,
               price: results.Price, 
               quantity: b[i].quantity,
               total: results.Price * b[i].quantity
            })
            totalBasketCost += results.Price * b[i].quantity
         }

      }
      totalBasketCost = (totalBasketCost/100).toFixed(2)

      // if(totalBasketCost>100){
      //    return {priceList, totalBasketCost}
      // }else {
      //    return {priceList, totalBasketCost: 100};
      // }
      return {priceList, totalBasketCost}

   }


   app.post('/api/users/register', async function(req, res) {
      console.log( '[POST /api/users/register] request body:', req.body )
      const { status, userData, message }= await orm.userRegister( req.body )
      if( !status ){
         res.status(403).send({ status, message }); return
      }

      // generate a session-key
      const session = sessionManager.create( userData.id )
      console.log( `.. registration complete! session: ${session}` )

      res.send({ status, session, userData, message })
   })

   app.post('/api/users/login', async function(req, res) {
      console.log( '[POST /api/users/login] req.body:', req.body )
      const { status, userData, message }= await orm.userLogin( req.body.email, req.body.password )
      if( !status ){
         res.status(403).send({ status, message }); return
      }

      // generate a session-key
      const session = sessionManager.create( userData.id )
      // console.log( `.. login complete! session: ${session}` )
      res.send({ status, session, userData, message })
   })

   // all these endpoints require VALID session info
   app.get('/api/users/session', authRequired, async function(req, res) {
      const { status, userData, message }= await orm.userSession( req.sessionData.userId )
      if( !status ){
         res.status(403).send({ status, message }); return
      }

      console.log( '.. session was ok, resending data' )
      res.send({ status, session, userData, message })
   })

   app.get('/api/users/logout', authRequired, async function(req, res) {
      sessionManager.remove( req.header.session )
      console.log( ` .. removed session ${req.header.session}`)
      res.send({ status: true, message: 'Logout complete' })
   })

   app.get('/api/tasks', authRequired, async function(req, res) {
      const { status, tasks, message }= await orm.taskList( req.sessionData.userId )
      console.log( ` .. got ${tasks.length} tasks for ownerId(${req.sessionData.userId})` )
      res.send({ status, tasks, message })
   })

   app.post('/api/tasks', authRequired, async function(req, res) {
      const newTask = req.body.task
      const { status, tasks, message }= await orm.taskSaveAndList( newTask, req.sessionData.userId )
      console.log( ` .. updated with '${newTask}' for ownerId(${req.sessionData.userId})` )
      res.send({ status, tasks, message })
   })

   app.get('/api/compaddresses', async function(req, res){
      const {status, allAddresses, currentAddress, message} = await orm.addressList()
      res.send({status, allAddresses, currentAddress, message})
   })

   app.post('/api/compaddresses', authRequired, async function(req, res){
      const newAddress = req.body
      const {status, allAddresses, currentAddress, message} = await orm.addAddress(newAddress, req.sessionData.userId)
      res.send({status, allAddresses, currentAddress, message})
   })

   app.post('/api/updatedaddress', authRequired, async function(req, res){
      const updatedAdress = req.body
      const {status, allAddresses, currentAddress, message} = await orm.updateAddress(updatedAdress, req.sessionData.userId)
      res.send({status, allAddresses, currentAddress, message})
   })

   app.post('/api/deleteAddress', authRequired, async function(req, res){
      console.log('router address delete', req.body)
      const deleteAddress = req.body
      const {status, allAddresses, currentAddress, message} = await orm.deleteAddress(deleteAddress, req.sessionData.userId)
      res.send({status, allAddresses, currentAddress, message})
   })


   app.post('/api/defaultAddress', authRequired, async function(req, res){
      const currentAddressChanges = req.body
      const {status, allAddresses, currentAddress, message} = await orm.selectedAddress(currentAddressChanges, req.sessionData.userId)
      res.send({status, allAddresses, currentAddress, message})
   })


   app.get('/api/wtpJSONpull', async function (req, res){      
      const JSONLIST = await orm.getWTPImages()
      res.send(JSONLIST)
   })

   app.post('/api/wtpJSONpull', async function (req, res){
      const JSONLIST = await orm.getWTPImages(req.body)
      res.send(JSONLIST)
   })

   app.get('/api/andJSONpull', async function (req, res){      
      const JSONLIST = await orm.getANDImages()
      res.send(JSONLIST)
   })

   app.post('/api/GALpull', async function (req, res){
      const JSONLIST = await orm.getGALImages(req.body)
      res.send(JSONLIST)
   })

   app.get('/api/GALpull', async function (req, res){      
      const JSONLIST = await orm.getGALImages()
      res.send(JSONLIST)
   })


   app.post('/api/basketListPrice',async function(req, res) {

      const x = req.body[1].basket
      const {priceList, totalBasketCost} = await calCosts(x)
      
      res.send({reply: priceList, totalCost:totalBasketCost})
   })


   app.post('/api/subscription', async function(req, res) {
      const newSubscription = req.body

      const  {resultFound, message, status} = await orm.subscritpions( newSubscription )

      res.send( {resultFound, message, status})
   })



   // app.get('/api/basketListPrice',async function(req, res) {
   //    console.log(req)

   //    const {priceList} = await calCosts(x)

      
   //    res.send({reply: priceList.length})
   // })







   
   // To seed db unblock this code and refresh on the test page

      app.post('/api/wtpJSON', async function(req, res){
         const WTP = req.body
         const results = await orm.seedWTP(WTP)

         res.send(results)
      })

      app.post('/api/wtpJSONAD', async function(req, res){
         const AND = req.body
         const results = await orm.seedAND(AND)

         res.send(results)
      })

      app.post('/api/wtpJSONGAL', async function(req, res){
         const GAL = req.body
         const results = await orm.seedGAL(GAL)

         res.send(results)
      })





   //stripe end point
   app.post("/api/create-payment-intent", async (req, res) => {

      const x = req.body[1].basket
      const {totalBasketCost} = await calCosts(x)
      let totalBasketCostUpdate = (totalBasketCost*100).toFixed()

    
      // Create a PaymentIntent with the order amount and currency
      if(totalBasketCost > 0){
         const paymentIntent = await stripe.paymentIntents.create({
         amount: totalBasketCostUpdate,
         currency: "cad",
         automatic_payment_methods: {
            enabled: true,
         },
         });
      
         res.send({
         clientSecret: paymentIntent.client_secret,x
         });

      }


    });
      
}

module.exports = router