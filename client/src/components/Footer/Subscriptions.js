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
            <form className="row g-3 subscriptions mb-3" onSubmit={subscriptionSubmit} >
                <div className=" input-group col-md-3 ">
                    <div className="form-floating " >
                        <div className={`${alertType} ${!subScriptionConfirm ?  "subscriptionAlert" : ""}`}>
                            {subScriptionMessage}
                        </div>
                        <input  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" type="email" className={`form-control ${!subScriptionConfirm ?  "" : "subscriptionAlert"} subScriptionEmail`} id="floatingInputGrid " placeholder="name@example.com"   value={email} onChange={handleChange} required/>
                        <label htmlFor="floatingInputGrid " className={`form-label ${!subScriptionConfirm ?  "" : "subscriptionAlert"}`}>Email address</label>
                    </div>
                    <button type="submit" className={`btn btn-dark btn-lg ${!subScriptionConfirm ?  "" : "subscriptionAlert"}`} >
                            <NewSubmitBTN 
                                size="35"
                                text="Subscribe"
                            />
                        </button>
                </div>

                <div className="col-md-3 pt-4">
                    <Social />
                </div>
 


            </form>            





{/* Testing Section */}
            <form className="row test justify-content-around g-3 mb-3"  >
                <div className=" col">
                    <div className="input-group">
                        <div className="form-floating " >

                            <input  type="email" className="form-control"  id="floatingInputGrid " placeholder="name@example.com" value={email} />
                            <label htmlFor="floatingInputGrid ">Email address</label>  
     
                                                             
                        </div>                    
                        <button type="submit" className='btn btn-dark btn-sm testbtn '>
                            <NewSubmitBTN 
                                size="35"
                                text="Subscribe"
                            
                            />
                        
                        </button> 
                     
                    </div>  
                </div   >
            </form>     

         

            {/* <div className="col-md-3 pt-4">
                    <Social />
                </div> */}
            

            
        </>
    )
}

export default Subscriptions