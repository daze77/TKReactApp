import React, {useRef} from 'react'
import './Footer.css'
import Social from '../Social/Social'




function Subscriptions(){
    const inputSubscriptemail = useRef()


    function SubscriptionSubmit(e){
        e.preventDefault()
        console.log("Submission Button Clicked")

        const subscriptData ={
            subscriptemail: inputSubscriptemail.current.value.trim()
        }

        console.log('this is the email', subscriptData)
        document.querySelector('#subscriptionAlert').innerHTML = `
        
        
        <svg xmlns="http://www.w3.org/2000/svg" style= {{display: "none;"}}>

            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </symbol>

        </svg>


        <div class="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert" >
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill"/></svg>
            <div>
                An example success alert with an icon
            </div>
        </div>
        
        `
    }


    return(
        <>
            <div class="row g-3 subscriptions mb-3 ">
                <div class="col-md-3"></div>
                <div class=" col-md-3 ">
                    <div class="form-floating ">
                        <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" ref={inputSubscriptemail}/>
                        <label for="floatingInputGrid">Email address</label>
                    </div>
                </div>
                <div class="col-md-3 pt-2 d-grid d-md-block">
                    <button type="button" class="btn btn-primary btn-lg " onClick={SubscriptionSubmit}>Subscribe</button>
                    <div id="subscriptionAlert"></div>
                </div>
                
                <div class="col-md-3 pt-4">
                    <Social />
                </div>
            </div>

            
        </>
    )
}

export default Subscriptions