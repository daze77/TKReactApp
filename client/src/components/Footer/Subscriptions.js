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
                </div>
                <div class="col-md-3 pt-4">
                    <Social />
                </div>
                

            </div>

            
        </>
    )
}

export default Subscriptions