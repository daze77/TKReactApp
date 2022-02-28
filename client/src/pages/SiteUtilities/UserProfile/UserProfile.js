import React, {useRef} from 'react'
// import {useStoreContext} from '../../utils/GlobalStore'
// import fetchJSON from '../../utils/API'



function UserProfile(){

    const inputEmail = useRef()
    const inputPassword = useRef()
    // const inputRememberMe = useRef()
    const refForm = useRef()

    // const saveData = {
    //     email: inputEmail.current.value,
    //     password: inputPassword.current.value,
    //     rememberMe: inputRememberMe.current.checked
    // }


 


return(
<>

            <div className="container">
      
                <form ref={refForm}>
                <div className="card mt-5">
                    <div className="card-header">
                        <h1>User Profile</h1>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input ref={inputEmail} id="email" type="email" className="form-control" required />
                            <div className="invalid-feedback">
                                Please enter your login email
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="userPassword">Password</label>
                            <input ref={inputPassword} id="userPassword" type="password" className="form-control"  pattern=".{8,}" required />
                            <div className="invalid-feedback">
                                Please enter your password (8 chars min)
                            </div>
                        </div>
                    </div>                    
                    <div className="card-footer">
    
                    </div>
                </div>
                </form>
            </div>


</>

)
}



export default UserProfile

