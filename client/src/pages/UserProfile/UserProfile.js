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

        <div className="container ">

            <form ref={refForm}>
                <div className="utilitiesCard mt-5">
                    <div >
                        <h1>User Profile</h1>
                    </div>
                    <div className="card-body">
                    <div className="form-floating mb-3">
                            <input id="firstName floatingInput" type="text" className="form-control" placeholder="First Name" required />
                            <label for="email" className="form-label">First Name</label>

                            <div className="invalid-feedback">
                                Please enter your login email
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input ref={inputEmail} id="email floatingInput" type="email" className="form-control" placeholder="Email Address" required />
                            <label for="email" className="form-label">Email Address</label>

                            <div className="invalid-feedback">
                                Please enter your login email
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input ref={inputPassword} id="userPassword floatingInput" type="password" className="form-control" placeholder="Existing Password" pattern=".{8,}" required />
                            <label for="userPassword">Existing Password</label>

                            <div className="invalid-feedback">
                                Please enter your password (8 chars min)
                            </div>
                        </div>
                    </div>                    
                </div>
            </form>
        </div>


    </>

)
}



export default UserProfile

