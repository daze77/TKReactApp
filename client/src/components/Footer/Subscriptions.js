import React, { useState} from 'react'
import Social from '../Social/Social'
import fetchJSON from '../../utils/API'
import NewSubmitBTN from '../NewSubmitBtn/NewSubmitBt'
import './Footer.css'


import CheckMarkSubmit from '../../components/CheckMarkSubmit/CheckMarkSubmit'


function Subscriptions(){

    const [email, setemail] = useState('')
    const [subScriptionConfirm, setsubScriptionConfirm] = useState(false)
    const [subScriptionMessage, setSubscriptionMessage] = useState("")
    const [alertType, setAlertType] = useState("alert-success")
    const [validity, setValidity] = useState(true)
    const [subResponse, setSubResponse] = useState(false)

    function handleChange(e){
        let nam = e.target.name 
        let val

        if(nam === 'phone'){
            let value = e.target.value.replace(/[.-\s]/g,".").trim()
            val = value
        }else if(nam === 'postalCode'){ 
            let value = e.target.value.toUpperCase().trim().replace(/[\s]/g,"")
            value.length>3 ? value = value.slice(0,3) + " " + value.slice(3,6): value +=""
            val = value
        }else if(nam === 'country'){
            let value = e.target.value.toUpperCase().trim()
            val = value
        }else{val = e.target.value}

        setemail(e.target.value)  
        
        let formValidity = document.querySelector('form').classList.contains('was-validated')

        // this needs to be refactored - why not do and instead of nesting and if in an if
        if(formValidity === true){
            document.querySelector(".emailSubscribe").querySelector('input:invalid') === null ? setValidity(true) : setValidity(false)
        }
        

    }

    async function subscriptionSubmit(e){
        e.preventDefault()

        const form = e.target.ownerDocument.forms.emailSubscribe


        if(!form.checkValidity()){
            form.classList.add('was-validated')
            setValidity(false)
            return
        }


        setsubScriptionConfirm(true)
        const {message, status} = await fetchJSON('/api/subscription', 'post', {email})
        setAlertType((status===false) ? "alert-danger" : "")
        setSubResponse(status)
        setSubscriptionMessage((status===false) ? message : "")
        setemail("")
        form.classList.remove('was-validated')

        setTimeout(function() {
            setsubScriptionConfirm(false)
            setSubResponse(false)
        }, 9000)

        
    }


    return(
        <>
        <div className="container">
            <div className="row align-items-center subscriptions">

                <div className="col-md-6 offset-md-3" >
                    <div className="centerItems">
                        <form className={`needs-validation emailSubscribe ${!subScriptionConfirm ?  "" : "subscriptionAlert"}`}  id='emailSubscribe' noValidate>
                            <div className={`input-group flex-nowrap mb-3 has-validation  `}>
                                <div className="form-floating " >
                                    <input  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" type="email" className={`form-control  subScriptionEmail`} id="floatingInputValue " placeholder="name@example.com"  name='email' value={email} onChange={handleChange} required/>

                                    <label htmlFor="floatingInputValue " className={`form-label  ${validity ? '' : "lablehide"}`} >Email address</label>
                                    <label htmlFor="floatingInputInvalid" className={`text-nowrap ${validity ? 'lablehide' : ''} `}>Invalid email address </label>
                                </div>
                                <button type="submit" onClick={subscriptionSubmit} className={`btn btn-dark `} >
                                        <NewSubmitBTN 
                                            size="35"
                                            text="Subscribe"
                                        />
                                </button>
                            </div>
                        </form>

                        
                    </div>
                    <CheckMarkSubmit 
                        subResponse = {subResponse}
                        alertType = {alertType}
                        subScriptionConfirm = {subScriptionConfirm}
                        subScriptionMessage = {subScriptionMessage}
                    />
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