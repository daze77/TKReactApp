import React, { useState } from 'react'
import fetchJSON from '../../utils/API'
import {useStoreContext} from '../../utils/GlobalStore'

function CorpAddress(){
    const [{ addresses, currentAddress}, dispatch ]= useStoreContext()
    const [myInput, setmyInput] =useState({
        addressName: "",
        address: "",
        address2: "",
        city: "",
        province: "",
        postalCode: "",
        country: "",
        email: "",
        phone: ""
    })

    function handleInput(event){
        let nam = event.target.name
        let val = event.target.value
        setmyInput({...myInput, [nam]: val})
    }

    function handleFormSubit(event){
        event.preventDefault()

        saveNewAddress(myInput)
    }

    async function saveNewAddress(myInput){
        const newAddress = myInput
        const {status, allAddresses, currentAddress, message} = await fetchJSON('/api/compaddresses', 'post',  newAddress)

        if(!status){
            dispatch({type: "ALERT_MESSAGE", message})
            return
        }
        dispatch({type: "UPDATE_COMPINFO", addresses: allAddresses, currentAddress, message})
    }

    function grabAddressDetails(id){
        const editAddress = addresses.filter(addr => addr._id === id)
        setmyInput(...editAddress)
    }

    async function updateAddress(){
        const updatedAddress = myInput
        const {status, allAddresses, message} = await fetchJSON('/api/updatedaddress', 'post',  updatedAddress)

        if(!status){
            dispatch({type: "ALERT_MESSAGE", message})
            return
        }

        dispatch({type: "UPDATE_COMPINFO", addresses: allAddresses, currentAddress, message})
    }

    async function defaultAddressChange(event){
        const [{addressflag, _id}] = addresses.filter(def => def.addressflag === true)

        const defaultAddressChange = { 
            oldAddress:{
                addressflag: addressflag,
                id: _id
            },
            newAddress:{
                id: event.target.id
            }
        }

        const {status, allAddresses, currentAddress, message} = await fetchJSON('/api/defaultAddress', 'post',  defaultAddressChange)

        if(!status){
            dispatch({type: "ALERT_MESSAGE", message})
            return
        }


        dispatch({type: "UPDATE_ADDRESS", addresses: allAddresses, currentAddress: currentAddress, message})
    }

    function calcTime(date){
        let dateInMil = new Date(date)
        let today = new Date()
        let diff = (today - dateInMil)/1000
        switch(true){
            case (diff < 60):
                return `${Math.round(diff)} seconds ago`;
            case (diff < 3600):
                return `${Math.round(diff/60)} mininutes ago`;
            case (diff < 86400):
                return `${Math.round(diff/3600)} hours ago`;
            case (diff < 604800):
                return `${Math.round(diff/86400)} days ago`;
            case (diff < 31449600):
                return `${Math.round(diff/604800)} weeks ago`;
            default:
                return `a while ago`;
        }
    }

    async function handleDelete(id){
        const newList = addresses.filter(addr => addr._id === id)
        const {status, allAddresses, currentAddress, message} = await fetchJSON('/api/deleteAddress', 'post', newList)

        if(!status){
            dispatch({type: "ALERT_MESSAGE", message})
            return
        }

        dispatch({type: "UPDATE_COMPINFO", addresses: allAddresses, currentAddress, message})   
    }
  
    return(
        <>
        <form>
            <div className="mb-3">
                <label htmlFor="addressName"  className="form-label">Address Name</label>
                <input onChange={handleInput} name="addressName"  type="text" className="form-control" id="addressName" placeholder="Address Name" value={myInput.addressName}/>
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input onChange={handleInput} name="address" type="text" className="form-control" id="address" placeholder="Address" value={myInput.address}/>
            </div>
            <div className="mb-3">
                <label htmlFor="address2" className="form-label">Address 2</label>
                <input onChange={handleInput} name="address2" type="text" className="form-control" id="address2" placeholder="Address 2" value={myInput.address2}/>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <label htmlFor="city" className="form-label">City</label>
                        <input onChange={handleInput} name="city" type="text" className="form-control" id="city" placeholder="City" value={myInput.city}/>
                    </div>
                    <div className="col">
                        <label htmlFor="province" className="form-label">Provice</label>
                        <input onChange={handleInput} name="province" type="text" className="form-control" id="province" placeholder="Province" value={myInput.province}/>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <label htmlFor="postalCode" className="form-label">Postal Code</label>
                        <input onChange={handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code" value={myInput.postalCode}/>
                    </div>
                    <div className="col">
                        <label htmlFor="country" className="form-label">Country</label>
                        <input onChange={handleInput} name="country" type="text" className="form-control" id="country" placeholder="Country" value={myInput.country}/>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="row">
                        <div className="col">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input onChange={handleInput} name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" value={myInput.email}/>
                    </div>
                    <div className="col">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input onChange={handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" value={myInput.phone}/>
                    </div>
                </div>
            </div>
            <button onClick={handleFormSubit} type="submit" className="btn btn-primary">Submit</button>
        </form>
        <br/>
        <h2 class="my-5">List of addressess saved to database</h2>
        

        {addresses.map(addr =>  
            <div key={addr._id} className="list-group"> 
                <div  className="list-group-item list-group-item-action addressList" aria-current="false">
                    <div  className="d-flex w-100 justify-content-between">
                        <h5 className="mb-">
                            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id={addr._id} checked={addr.addressflag} onChange={defaultAddressChange} />{addr.addressName}
                        </h5>
                        <small>{calcTime(addr.updatedAt)}</small>
                    </div>
                    <div>
                        <p className="m-1">
                            {addr.address} <br/>
                            {(addr.address2) && <> {addr.address2} <br/> </>}
                            <small>{addr.city} {addr.province}, {addr.postalCode} - {addr.country}</small> 
                        </p>
                        <div className="d-flex w-100 justify-content-end">
                            <small onClick={() => grabAddressDetails(addr._id)} className="me-2"><i className="fa fa-i-cursor" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></small>                        
                            <small onClick={() => handleDelete(addr._id)} className="ms-2"><i className="far fa-trash-alt"></i></small>
                        </div>

                    </div>
                </div>
            </div>
        )} 

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
                                <input onChange={handleInput} name="addressName" type="text" className="form-control" id="addressName" placeholder="Address Name" value={myInput.addressName} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input onChange={handleInput} name="address" type="text" className="form-control" id="address" placeholder="Address" value={myInput.address} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address2" className="form-label">Address 2</label>
                                <input onChange={handleInput} name="address2" type="text" className="form-control" id="address2" placeholder="Address 2" value={myInput.address2} />
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input onChange={handleInput} name="city" type="text" className="form-control" id="city" placeholder="City" value={myInput.city}/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="province" className="form-label">Provice</label>
                                        <input onChange={handleInput} name="province" type="text" className="form-control" id="province" placeholder="Province" value={myInput.province}/>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="postalCode" className="form-label">Postal Code</label>
                                        <input onChange={handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code" value={myInput.postalCode}/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="country" className="form-label">Country</label>
                                        <input onChange={handleInput} name="country" type="text" className="form-control" id="country" placeholder="Country" value={myInput.country}/>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="emailInput" className="form-label">Email address</label>
                                        <input onChange={handleInput} name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" value={myInput.email}/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                        <input onChange={handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" value={myInput.phone}/>
                                    </div>
                                </div>
                            </div>
                            {/* <button onClick={handleFormSubit} type="submit" className="btn btn-primary">Submit</button> */}
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={updateAddress}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </>
)}

export default CorpAddress