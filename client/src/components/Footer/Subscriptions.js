import React, {useRef, useState} from 'react'
import Social from '../Social/Social'
import fetchJSON from '../../utils/API'

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
            <form className="row g-3 subscriptions mb-3" onSubmit={subscriptionSubmit} >
                <div className="col-md-3"></div>
                <div className=" col-md-3 ">
                    <div className="form-floating " >
                    <div className={`${alertType} ${!subScriptionConfirm ?  "subscriptionAlert" : ""}`}>{subScriptionMessage}</div>
                        <input  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" type="email" className={`form-control ${!subScriptionConfirm ?  "" : "subscriptionAlert"} subScriptionEmail`} id="floatingInputGrid " placeholder="name@example.com"   value={email} onChange={handleChange} required/>
                        <label htmlFor="floatingInputGrid " className={`form-label ${!subScriptionConfirm ?  "" : "subscriptionAlert"}`}>Email address</label>
                    </div>
                </div>
                <div className="col-md-3 pt-2 d-grid d-md-block">
                    <button type="submit" className={`btn btn-primary btn-lg ${!subScriptionConfirm ?  "" : "subscriptionAlert"}`}  >Subscribe</button>
                </div>              
                <div className="col-md-3 pt-4">
                    <Social />
                </div>
 


            </form>               
            

            
        </>
    )
}

export default Subscriptions