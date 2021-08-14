import React, {useRef} from 'react'
import {useStoreContext} from '../../utils/GlobalStore'
import fetchJSON from '../../utils/API'



function UserProfile(){

    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputRememberMe = useRef()
    const refForm = useRef()

    // const saveData = {
    //     email: inputEmail.current.value,
    //     password: inputPassword.current.value,
    //     rememberMe: inputRememberMe.current.checked
    // }


 


return(
<>

            <div class="container">
      
                <form ref={refForm}>
                <div class="card mt-5">
                    <div class="card-header">
                        <h1>User Profile</h1>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input ref={inputEmail} id="email" type="email" class="form-control" required />
                            <div class="invalid-feedback">
                                Please enter your login email
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="userPassword">Password</label>
                            <input ref={inputPassword} id="userPassword" type="password" class="form-control"  pattern=".{8,}" required />
                            <div class="invalid-feedback">
                                Please enter your password (8 chars min)
                            </div>
                        </div>
                    </div>                    
                    <div class="card-footer">
    
                    </div>
                </div>
                </form>
            </div>


</>

)
}



export default UserProfile

