import React from 'react'


function AddressForm(props){

    return(
        <>
            <form >
                <div className="form-floating mb-3">
                    <input onChange={props.handleInput} name="addressName"  type="text" className="form-control" id="addressName" placeholder="Address Name" value={props.myInput.addressName}/>
                    <label htmlFor="addressName"  >Address Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={props.handleInput} name="address" type="text" className="form-control" id="address" placeholder="Address" value={props.myInput.address}/>
                    <label htmlFor="address" >Address</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={props.handleInput} name="address2" type="text" className="form-control" id="address2" placeholder="Address 2" value={props.myInput.address2}/>
                    <label htmlFor="address2" >Address 2</label>

                </div>
                <div className=" mb-3">
                    <div className="row">
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="city" type="text" className="form-control" id="city" placeholder="City" value={props.myInput.city}/>
                            <label htmlFor="city" >City</label>

                        </div>
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="province" type="text" className="form-control" id="province" placeholder="Province" value={props.myInput.province}/>
                            <label htmlFor="province" >Provice</label>

                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code" value={props.myInput.postalCode}/>
                            <label htmlFor="postalCode" >Postal Code</label>

                        </div>
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="country" type="text" className="form-control" id="country" placeholder="Country" value={props.myInput.country}/>
                            <label htmlFor="country" >Country</label>

                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                            <div className="form-floating col">
                            <input onChange={props.handleInput} name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" value={props.myInput.email}/>
                            <label htmlFor="emailInput" >Email address</label>

                        </div>
                        <div className="form-floating col">
                            <input onChange={props.handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" value={props.myInput.phone}/>
                            <label htmlFor="phone" >Phone Number</label>

                        </div>
                    </div>
                </div>
                <div className='clearfix'>
                <button onClick={props.handleFormSubit} type="submit" className=" float-end btn btn-primary ">Submit</button></div>
            </form>
            <br/>


        
        
        </>
    )
}

export default AddressForm