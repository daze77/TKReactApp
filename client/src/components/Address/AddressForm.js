import React from 'react'


function AddressForm(props){


    return(
        <>
        
            <form >
                <div className="mb-3">
                    <label htmlFor="addressName"  className="form-label">Address Name</label>
                    <input onChange={props.handleInput} name="addressName"  type="text" className="form-control" id="addressName" placeholder="Address Name" value={props.myInput.addressName}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input onChange={props.handleInput} name="address" type="text" className="form-control" id="address" placeholder="Address" value={props.myInput.address}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address2" className="form-label">Address 2</label>
                    <input onChange={props.handleInput} name="address2" type="text" className="form-control" id="address2" placeholder="Address 2" value={props.myInput.address2}/>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="city" className="form-label">City</label>
                            <input onChange={props.handleInput} name="city" type="text" className="form-control" id="city" placeholder="City" value={props.myInput.city}/>
                        </div>
                        <div className="col">
                            <label htmlFor="province" className="form-label">Provice</label>
                            <input onChange={props.handleInput} name="province" type="text" className="form-control" id="province" placeholder="Province" value={props.myInput.province}/>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="postalCode" className="form-label">Postal Code</label>
                            <input onChange={props.handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code" value={props.myInput.postalCode}/>
                        </div>
                        <div className="col">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input onChange={props.handleInput} name="country" type="text" className="form-control" id="country" placeholder="Country" value={props.myInput.country}/>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                            <div className="col">
                            <label htmlFor="emailInput" className="form-label">Email address</label>
                            <input onChange={props.handleInput} name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" value={props.myInput.email}/>
                        </div>
                        <div className="col">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input onChange={props.handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" value={props.myInput.phone}/>
                        </div>
                    </div>
                </div>
                <button onClick={props.handleFormSubit} type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br/>

        {/* Address Change Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Address Update</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label  htmlFor="addressName" className="form-label">Address Name</label>
                                    <input onChange={props.handleInput} name="addressName" type="text" className="form-control" id="addressName" placeholder="Address Name" value={props.myInput.addressName} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input onChange={props.handleInput} name="address" type="text" className="form-control" id="address" placeholder="Address" value={props.myInput.address} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address2" className="form-label">Address 2</label>
                                    <input onChange={props.handleInput} name="address2" type="text" className="form-control" id="address2" placeholder="Address 2" value={props.myInput.address2} />
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="city" className="form-label">City</label>
                                            <input onChange={props.handleInput} name="city" type="text" className="form-control" id="city" placeholder="City" value={props.myInput.city}/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="province" className="form-label">Provice</label>
                                            <input onChange={props.handleInput} name="province" type="text" className="form-control" id="province" placeholder="Province" value={props.myInput.province}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="postalCode" className="form-label">Postal Code</label>
                                            <input onChange={props.handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code" value={props.myInput.postalCode}/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="country" className="form-label">Country</label>
                                            <input onChange={props.handleInput} name="country" type="text" className="form-control" id="country" placeholder="Country" value={props.myInput.country}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="emailInput" className="form-label">Email address</label>
                                            <input onChange={props.handleInput} name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" value={props.myInput.email}/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <input onChange={props.handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" value={props.myInput.phone}/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={props.updateAddress}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default AddressForm