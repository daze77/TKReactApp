import React from 'react'

function ChangeAddressModal(props){



    return(
        <>
            {/* Address Change Modal */}
            <div className="modal fade " id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-backdrop="static" >
                <div className="modal-dialog ">
                    <div className="modal-content utilitiesCard">
                        <div className="modal-header">
                            <h1 className="modal-title" id="exampleModalLabel">Address Update</h1>
                            <button onClick={props.clearModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='checkMark' style={props.showCheckModal === "none" ? { display: 'none' } : { display: 'block' }}>
                            <div className="modal-body">
                                <form id="modalForm" className="needs-validation" noValidate>
                                    <div className="form-floating mb-3">
                                        <input onChange={props.handleInput} name="addressName" type="text" className="form-control" id="addressName" placeholder="Address Name" value={props.modalInput.addressName} />
                                        <label htmlFor="addressName">Address Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={props.handleInput} name="addressNickName" type="text" className="form-control" id="addressNickName" placeholder="Address Name" value={props.modalInput.addressNickName} />
                                        <label htmlFor="addressNickName">Address Name (Nick Name)</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={props.handleInput} name="address" type="text" className="form-control" id="address" placeholder="Address" value={props.modalInput.address} required/>
                                        <label htmlFor="address" className="form-label">Address</label>

                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={props.handleInput} name="address2" type="text" className="form-control" id="address2" placeholder="Address 2" value={props.modalInput.address2} />
                                        <label htmlFor="address2" className="form-label">Address 2</label>

                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="city" type="text" className="form-control" id="city" placeholder="City" value={props.modalInput.city} required/>
                                                <label htmlFor="city" className="form-label">City</label>

                                            </div>
                                            <div className="form-floating col">
                                                <select onChange={props.handleInput} name="province" type="text" className="form-control" id="province" placeholder="Province" value={props.modalInput.province} required>
                                                <option selected diabled="true" value="">Open this select menu</option>
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
                                                <label htmlFor="province" className="form-label">Provice</label>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code" value={props.modalInput.postalCode} pattern="[a-zA-Z]{1}[1-9]{1}[a-zA-Z]{1}[./\s/-]{0,1}[1-9]{1}[a-zA-Z]{1}[1-9]{1}" required/>
                                                <label htmlFor="postalCode" className="form-label">Postal Code</label>

                                            </div>
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="country" type="text" className="form-control" id="country" placeholder="Country" value={props.modalInput.country} required/>
                                                <label htmlFor="country" className="form-label">Country</label>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" value={props.modalInput.email} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" required/>
                                                <label htmlFor="emailInput" className="form-label">Email address</label>

                                            </div>
                                            <div className="form-floating col">
                                                <input onChange={props.handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" value={props.modalInput.phone} pattern="[1-9]{3}[./\s/-]{0,1}[1-9]{3}[./\s/-]{0,1}[1-9]{4}" required/>
                                                <label htmlFor="phone" className="form-label">Phone Number</label>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={props.updateAddress}>Save changes</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className='checkMark' style={props.showCheckModal === "none" ? { display: 'block' } : { display: 'none' }}>
                            <i className="checkFormat fas fa-check fa-10x"></i>
                            <p>Updated Successfully</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangeAddressModal