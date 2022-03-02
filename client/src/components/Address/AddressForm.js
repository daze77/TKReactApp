import React from 'react'


function AddressForm(props){

    // var myModal = document.getElementById('modal')
    // console.log(myModal)



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

        {/* Address Change Modal */}
            <div className="modal fade " id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog ">
                    <div className="modal-content utilitiesCard">
                        <div className="modal-header">
                            <h1 className="modal-title" id="exampleModalLabel">Address Update</h1>
                            <button onClick={props.clearModal}type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='checkMark' style={props.showCheckModal === "none" ? {display:'none'} : {display:'block'}}>
                            <div className="modal-body">
                                <form>
                                    <div className="form-floating mb-3">

                                        <input onChange={props.handleInput} name="addressName" type="text" className="form-control" id="addressName" placeholder="Address Name" value={props.myInput.addressName} />
                                        <label  htmlFor="addressName">Address Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={props.handleInput} name="address" type="text" className="form-control" id="address" placeholder="Address" value={props.myInput.address} />
                                        <label htmlFor="address" className="form-label">Address</label>

                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={props.handleInput} name="address2" type="text" className="form-control" id="address2" placeholder="Address 2" value={props.myInput.address2} />
                                        <label htmlFor="address2" className="form-label">Address 2</label>

                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="city" type="text" className="form-control" id="city" placeholder="City" value={props.myInput.city}/>
                                                <label htmlFor="city" className="form-label">City</label>

                                            </div>
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="province" type="text" className="form-control" id="province" placeholder="Province" value={props.myInput.province}/>
                                                <label htmlFor="province" className="form-label">Provice</label>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code" value={props.myInput.postalCode}/>
                                                <label htmlFor="postalCode" className="form-label">Postal Code</label>

                                            </div>
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="country" type="text" className="form-control" id="country" placeholder="Country" value={props.myInput.country}/>
                                                <label htmlFor="country" className="form-label">Country</label>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" value={props.myInput.email}/>
                                                <label htmlFor="emailInput" className="form-label">Email address</label>

                                            </div>
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" value={props.myInput.phone}/>
                                                <label htmlFor="phone" className="form-label">Phone Number</label>

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
                        <div className='checkMark' style={props.showCheckModal === "none" ? {display:'block'} : {display:'none'}}>
                        <i className="checkFormat fas fa-check fa-10x"></i>
                        <p>Updated Successfully</p>
                    </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default AddressForm