import React, {useState} from 'react'


function AddressForm(props){
        const [myInputs, setmyInputs] = useState({
            name: ""
        })


        function five(event){
            console.log(myInputs.firstName)

            console.log('hey')
            // console.log(event.target)
        
            // let nam = event.target.name
            // let val = event.target.value
       

            // console.log(event.target.checkValidity())
                  
            // setmyInputs({...myInputs, [nam]: val})


            // if(!event.target.checkValidity()){
            //     event.target.classList.add('was-validated')
                
            // }

            
        }


    function test(event){
        event.preventDefault()




 
    }


    return(
        <>
            {/* <form className="needs-validation" novalidate>
                <div className="form-floating mb-3">
                    <input onChange={props.handleInput} name="addressName" type="text" className="form-control" id="addressName" placeholder="Address Name" value={props.myInput.addressName} required />
                    <label htmlFor="addressName"  >Address Name (Nick Name)                
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </label>

                </div>

                <div className="form-floating mb-3">
                    <input onChange={props.handleInput} name="address" type="text" className="form-control" id="address" placeholder="Address" value={props.myInput.address} required />
                    <label htmlFor="address" >Address</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={props.handleInput} name="address2" type="text" className="form-control" id="address2" placeholder="Address 2" value={props.myInput.address2} />
                    <label htmlFor="address2" >Address 2</label>

                </div>
                <div className=" mb-3">
                    <div className="row">
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="city" type="text" className="form-control" id="city" placeholder="City" value={props.myInput.city} required />
                            <label htmlFor="city" >City</label>

                        </div>
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="province" type="text" className="form-control" id="province" placeholder="Province" value={props.myInput.province} required />
                            <label htmlFor="province" >Provice</label>

                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code" value={props.myInput.postalCode} required />
                            <label htmlFor="postalCode" >Postal Code</label>

                        </div>
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="country" type="text" className="form-control" id="country" placeholder="Country" value={props.myInput.country} required />
                            <label htmlFor="country" >Country</label>

                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" value={props.myInput.email} required />
                            <label htmlFor="emailInput" >Email address</label>

                        </div>
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" value={props.myInput.phone} required />
                            <label htmlFor="phone" >Phone Number</label>

                        </div>
                    </div>
                </div>
                <div className='clearfix'>
                    <button type="submit" className=" float-end btn btn-primary ">Submit</button></div>
            </form> */}
            <br />


            {/* Testing */}

            <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label" name="firstName">First name</label>
    <input type="text" onClick={five} class="form-control" id="validationCustom01"  required/>
    <div class="invalid-feedback">
      Looks good!
    </div>
  </div>

  <div class="col-12">
    <button onClick={test} class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

        
        
        </>
    )
}

export default AddressForm