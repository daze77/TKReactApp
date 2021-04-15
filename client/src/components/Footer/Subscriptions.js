import React, {useRef} from 'react'
import './Footer.css'




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




            <div class="row g-3 subscriptions mb-3 justify-content-center">
                <div class="col-md-4"></div>
                <div class=" col-md-4 ">
                    <div class="form-floating ">
                        <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" ref={inputSubscriptemail}/>
                        <label for="floatingInputGrid">Email address</label>
                    </div>
                </div>
                <div class="col-md-4 pt-2 d-grid d-md-block">
                    <button type="button" class="btn btn-primary btn-lg " onClick={SubscriptionSubmit} >Submit</button>
                </div>

            </div>




        </>



    )




}



export default Subscriptions