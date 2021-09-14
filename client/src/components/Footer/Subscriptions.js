import React, {useRef, useState} from 'react'
import Social from '../Social/Social'

import './Footer.css'


function Subscriptions(){

    const inputSubscriptemail = useRef()
    const [subScriptionConfirm, setsubScriptionConfirm] = useState(false)

    function SubscriptionSubmit(e){
        e.preventDefault()
        console.log("Submission Button Clicked")

        const subscriptData ={
            subscriptemail: inputSubscriptemail.current.value.trim()
        }

        console.log('this is the email', subscriptData)

        setsubScriptionConfirm(true)

        setTimeout(function() {setsubScriptionConfirm(false)}, 5000)
    
    }


    return(
        <>
            <div className="row g-3 subscriptions mb-3 ">
                <div className="col-md-3"></div>
                <div className=" col-md-3 ">
                    <div className="form-floating ">
                        <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" ref={inputSubscriptemail}/>
                        <label htmlFor="floatingInputGrid">Email address</label>
                    </div>
                </div>
                <div className="col-md-3 pt-2 d-grid d-md-block">
                    <button type="button" className="btn btn-primary btn-lg " onClick={SubscriptionSubmit}>Subscribe</button>
                </div>
                <div className={`alert-success ${!subScriptionConfirm ?  "subscriptionAlert" : ""}`}>Thank you for subscribing</div>
                
                <div className="col-md-3 pt-4">
                    <Social />
                </div>
            </div>

            
        </>
    )
}

export default Subscriptions