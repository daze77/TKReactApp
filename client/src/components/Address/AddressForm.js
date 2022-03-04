import React from 'react'


function AddressForm(props){
       

    return(
        <>
            <form className="needs-validation" noValidate>
                <div className="form-floating mb-3">
                    <input onChange={props.handleInput} name="addressName" type="text" className="form-control" id="addressName" placeholder="Address Name" value={props.myInput.addressName} />
                    <label htmlFor="addressName">Address Name               
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={props.handleInput} name="addressNickName" type="text" className="form-control" id="addressName" placeholder="Address Nick Name" value={props.myInput.addressNickName} />
                    <label htmlFor="addressName"  >Address Name (Nick Name) - to appear on address               
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
                            <select onChange={props.handleInput} name="province" type="text" className="form-select" id="province" placeholder="Province" value={props.myInput.province} required >
                              <option selected='selected' diabled="true" value="">Open this select menu</option>
                              <option value="Alberta">Alberta</option>
                              <option value="British Columbia">British Columbia</option>
                              <option value="Manitoba">Manitoba</option>
                              <option value="New Brunswick">New Brunswick</option>
                              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                              <option value="Nova Scotia">Nova Scotia</option>
                              <option value="Ontario">Ontario</option>
                              <option value="Prince Edward Island">Prince Edward Island</option>
                              <option value="Quebec">Quebec</option>
                              <option value="Saskatchewan">Saskatchewan</option>
                              <option value="Northwest Territories">Northwest Territories</option>
                              <option value="Nunavut">Nunavut</option>
                              <option value="Yukon">Yukon</option>

                              </select>
                            <label htmlFor="province" >Provice</label>

                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code" value={props.myInput.postalCode} required pattern="[a-zA-Z]{1}[1-9]{1}[a-zA-Z]{1}[./\s/-]{0,1}[1-9]{1}[a-zA-Z]{1}[1-9]{1}"/>
                            <label htmlFor="postalCode" >Postal Code</label>
                            <div className="invalid-feedback" >
                            Please enter a valid postal code
                            </div>

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
                            <input onChange={props.handleInput} name="email" type="email" className="form-control" id="email" placeholder="name@example.com" value={props.myInput.email} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" required />
                            <label htmlFor="email" >Email address</label>
                            <div className="invalid-feedback">
                            Please enter a valid email address
                            </div>

                        </div>
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" value={props.myInput.phone} required pattern="[1-9]{3}[./\s/-]{0,1}[1-9]{3}[./\s/-]{0,1}[1-9]{4}"/>
                            <label htmlFor="phone" >Phone Number</label>
                            <div className="invalid-feedback">
                            Please enter a valid phone number
                            </div>

                        </div>
                    </div>
                </div>
                <div className='clearfix'>
                    <button  onClick={props.handleFormSubmit} className=" float-end btn btn-primary ">Submit</button></div>
            </form>
            <br />     
        
        </>
    )
}

export default AddressForm