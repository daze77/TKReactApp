/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable quotes */

const mongoose = require( 'mongoose' )
const bcrypt = require( 'bcrypt' )

mongoose.connect(process.env.MONGODB_URI,
   {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

// include mongoose models (it will include each file in the models directory)
const db = require( './models' )


async function userRegister( userData ){
   if( !userData.name || !userData.email || !userData.password ){
      console.log( '[registerUser] invalid userData! ', userData )
      return { status: false, message: 'Invalid user data' }
   }

   // refuse duplicate user emails
   let duplicateUser = await db.users.findOne({ email: userData.email })
   if( duplicateUser && duplicateUser._id ){
      return { status: false, message: 'Duplicate email, try another or login' }
   }

   // hash the password (salt=10)
   const passwordHash = await bcrypt.hash(userData.password, 10)

   const saveData = {
      name: userData.name,
      email: userData.email || '',
      thumbnail: userData.thumbnail || '',
      password: passwordHash
   }
   const saveUser = await db.users.create( saveData )
   if( !saveUser._id ){
      return { status: false, message: `Sorry failed creating entry for ${saveUser.name}: ` }
   }

   return {
      status: true,
      message: `Success! ${saveUser.name} was successfully registered`,
      userData: {
         id: saveUser._id,
         name: saveUser.name,
         email: saveUser.email,
         thumbnail: saveUser.thumbnail
      }
   }
}

async function userLogin( email, password ) {
   const userData = await db.users.findOne({ email: email } )
   if( !userData || !userData._id ) {
      return { status: false, message: 'Invalid login' }
   }

   // compare the passwords to see if valid login
   const isValidPassword = await bcrypt.compare( password, userData.password )
   // console.log( ` [loginUser] checking password (password: ${password} ) hash(${userData.password})`, isValidPassword )
   if( !isValidPassword ) {
      return { status: false, message: 'Invalid password' }
   }

   return {
      status: true,
      message: `Logging in ${userData.name}...`,
      userData: {
         id: userData._id,
         name: userData.name,
         email: userData.email,
         thumbnail: userData.thumbnail
      }
   }
}

async function userSession( userId ){
   const userData = await db.users.findOne({ _id: userId })
   if( !userData || !userData._id ) {
      return { status: false, message: 'Invalid session' }
   }
   return {
      status: true,
      message: '',
      userData: {
         id: userData._id,
         name: userData.name,
         email: userData.email,
         thumbnail: userData.thumbnail
      }
   }
}

async function taskList( ownerId, message='' ){
   // refuse duplicate user emails
   const tasks = await db.tasks.find({ ownerId }, '-ownerId -__v')

   return {
      status: true,
      message,
      tasks
   }
}

async function taskSaveAndList( newTask, ownerId ){
   // refuse duplicate user emails
   const result = await db.tasks.create({ name: newTask, ownerId })
   if( !result._id ){
      return {
         status: false,
         message: 'Sorry could not save task!'
      }
   }

   return taskList( ownerId, 'Task saved' )
}

async function addressList(){
   const allAddresses = await db.compaddresses.find({})
   const [currentAddress] = allAddresses.filter(addr => addr.addressflag === true)

   return{
      status: true,
      message: 'Yo, we found some data',
      allAddresses,
      currentAddress
   }
}

async function addAddress(newAddress, ownerId){
   const result = await db.compaddresses.create( {ownerId:ownerId, ...newAddress} )
  
   if(!result._id){
      return{
         status: false,
         message: 'Sorry could not save the new address'
      }
   }
   return addressList(ownerId, 'Address saved')
}

async function updateAddress(updatedAddress){
   const {_id, ownerId, createdAt, updatedAt, ...addressChanges} = updatedAddress
   const savedAddress = await db.compaddresses.findOneAndUpdate({_id},{...addressChanges})

   return addressList(ownerId, 'Address saved')
}

async function selectedAddress(currentAddressChanges){
   const {oldAddress: {id: oldID}, newAddress: {id: newID}} = currentAddressChanges

   const savedAddress = await db.compaddresses.findOneAndUpdate({_id: oldID},{addressflag: false}).then(doc => db.compaddresses.findOneAndUpdate({_id: newID},{addressflag: true}))

   return addressList('Current Address updated')
}

async function deleteAddress(removeAddress){
   const [{_id}] = removeAddress
   const newList = await db.compaddresses.deleteOne({_id})

   return addressList()
}

async function getWTPImages(title){
   let results
   let WTPDetails =[]

   if(title){
      const {Title} = title
      results = await db.wtps.find({Title})
      for (const {SubLink} of results){
         [WTPDetails] = [ {SubLink}]
      }
   }else {
      results = await db.wtps.find({})
      for (const {_id, Title, Image, Link} of results){
         WTPDetails = [...WTPDetails, {_id, Title, Image, Link}]
      }
   }
      return ( WTPDetails )
}

async function getANDImages(){
   const newANDList = await db.aandds.find({})
   return newANDList
  
}

async function getGALImages(title){
   let results
   let GALDetails =[]

   if(title){
      const {Title} = title
      results = await db.gallerys.find({Title})

      for (const {SubLink} of results){
         [GALDetails] = [{SubLink}] 
      }
      GALDetails.URL = results[0].URL
   } else {
      results = await db.gallerys.find({})
      for(const {_id, Title, Image, ImageName, Link, Price} of results){
         GALDetails = [...GALDetails, {_id, Title, Image, ImageName, Link, Price}]
        
      }
   }
   return ( GALDetails)
}

// need to pass title here so that I can get the right information
async function getGALPrice(id, clickedItem){
  
   const [results] = await db.gallerys.find({'Title': clickedItem, 'SubLink._id':id},{'SubLink.$':1})
   // console.log('orm results', results)
   // console.log('from ORM', results.SubLink)
   return(results.SubLink)
}

async function subscritpions(newSubscription){
   const [resultFound] = await db.subscriptions.find(newSubscription)

   if(resultFound !== undefined){
      return {resultFound, message: `${resultFound.email} is already on file`, status: false}
   }else{
      const result = await db.subscriptions.create( newSubscription )
      return {result, message: "thank you for registering", status: true }
   }
}


// these function are related to loading the db with the JSON data from file
async function seedWTP(wtp){
   const newWTPList = await db.wtps.insertMany(wtp) 
   return({results: newWTPList})
}

async function seedAND(aandd){
   const newANDList = await db.aandds.insertMany(aandd) 
   return({results: newANDList})
}

async function seedGAL(gallery){
   const newGALList = await db.gallerys.insertMany(gallery) 
   return({results: newGALList})
}

module.exports = {
   userRegister,
   userLogin,
   userSession,
   taskList,
   taskSaveAndList,
   addressList,
   addAddress,
   updateAddress,
   selectedAddress,
   deleteAddress,
   seedWTP,
   getWTPImages,
   seedAND,
   getANDImages,
   seedGAL,
   getGALImages,
   getGALPrice,
   subscritpions
};