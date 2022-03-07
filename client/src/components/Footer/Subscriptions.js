import React, { useState} from 'react'
import Social from '../Social/Social'
import fetchJSON from '../../utils/API'
import NewSubmitBTN from '../NewSubmitBtn/NewSubmitBt'
import './Footer.css'




function Subscriptions(){

    const [email, setemail] = useState('')
    const [subScriptionConfirm, setsubScriptionConfirm] = useState(false)
    const [subScriptionMessage, setSubscriptionMessage] = useState("")
    const [alertType, setAlertType] = useState("alert-success")

    function handleChange(e){
        setemail(e.target.value)   
    }

    async function subscriptionSubmit(e){
        e.preventDefault()
        setsubScriptionConfirm(true)
        const {message, status} = await fetchJSON('/api/subscription', 'post', {email})
        setAlertType((status===false) ? "alert-danger" : "alert-success")
        setSubscriptionMessage(message)
        setemail("")
        setTimeout(function() {setsubScriptionConfirm(false)}, 5000)

        
    }


    return(
        <>
        <div className="container">

       
            <div className="row   align-items-center subscriptions">

                <div className="col-md-6 offset-md-3" >
                    <form className="  " onSubmit={subscriptionSubmit} >
                        <div className=" input-group flex-nowrap mb-3">
                            <div className="form-floating " >
                                <div className={`${alertType} ${!subScriptionConfirm ?  "subscriptionAlert" : ""}`}>
                                    {subScriptionMessage}
                                </div>
                                <input  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" type="email" className={`form-control ${!subScriptionConfirm ?  "" : "subscriptionAlert"} subScriptionEmail`} id="floatingInputGrid " placeholder="name@example.com"   value={email} onChange={handleChange} required/>
                                <label htmlFor="floatingInputGrid " className={`form-label ${!subScriptionConfirm ?  "" : "subscriptionAlert"}`}>Email address</label>
                            </div>
                            <button type="submit" className={`btn btn-dark btn-sm ${!subScriptionConfirm ?  "" : "subscriptionAlert"}`} >
                                    <NewSubmitBTN 
                                        size="35"
                                        text="Subscribe"
                                    />
                            </button>
                        </div>


        


                    </form>   
                </div>
                <div className="col-md-3 ">
                        <Social />
                </div>
                

                
            </div>     
            
            
            
            
            
            
            
        </div>
                    




    

         

            

            
        </>
    )
}

export default Subscriptions