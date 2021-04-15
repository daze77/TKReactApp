import React, {useRef} from 'react'




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




            <div class="row">
                <div class="form-floating mb-3 col-auto">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" ref={inputSubscriptemail}/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="col-auto">
                    <button type="button" class="btn btn-primary btm-sm" onClick={SubscriptionSubmit} >Submit</button>
                </div>

            </div>




        </>



    )




}



export default Subscriptions