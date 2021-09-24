import React, { useEffect, useState } from 'react'
import fetchJSON from '../../utils/API'
import {useStoreContext} from '../../utils/GlobalStore'

function CorpAddress(){
    const [{ addresses }, dispatch ]= useStoreContext()
    const [input, setmyInput] =useState({})
    const [currentAddress, setmyCurrentAddress] =useState({})
    // const [alldbAddresses, setAlldbAddreses] = useState({})

    console.log(`addresses from dipatch:`, {addresses})

    function handleInput(event){
        let nam = event.target.name
        let val = event.target.value
        setmyInput({...input, [nam]: val})
    }

    function handleFormSubit(event){
        event.preventDefault()

        // setmyAddress(input)
        saveNewAddress(input)
    }

    async function saveNewAddress(input){
        const newAddress = input
        console.log(`[this is the Front End newAddress]`,newAddress)

        const {status, allAddresses, message} = await fetchJSON('/api/compaddresses', 'post',  newAddress)

        // console.log( 'fetch api front end', status, allAddresses, message)


        if(!status){
            dispatch({type: "ALERT_MESSAGE", message})
            return
        }
        dispatch({type: "UDPATE_COMPINFO", addresses: allAddresses, message})

    }

    async function getAllAddresses(){
        const {allAddresses} = await fetchJSON('/api/compaddresses')
        console.log('this is address get from front end- addresses page', allAddresses)
        // setAlldbAddreses(allAddresses)
        // setmyCurrentAddress(allAddresses.find(addr => addr.addressflag === true))

        dispatch({type: "UDPATE_COMPINFO", addresses: allAddresses})
    }

    // console.log('this is all addresses declared', alldbAddresses)


    function grabAddressDetails(id){
        const editAddress = addresses.filter(addr => addr._id === id)
        console.log(editAddress)
        setmyInput(...editAddress)
    }


    async function updateAddress(){
        console.log('edit button pushed')
        const updatedAddress = input
        console.log('this is updatedAddress on FE', updatedAddress)
        const {status, allAddresses, message} = await fetchJSON('/api/updatedaddress', 'post',  updatedAddress)

        console.log('dispatch address', addresses)

        dispatch({type: "UDPATE_COMPINFO", addresses: allAddresses, message})



        // console.log('here we go', savedAddress)



    }
    
    useEffect(function(){
        getAllAddresses()
    },[])

    return(
        <>
        <form>
            <div className="mb-3">
                <label htmlFor="addressName"  className="form-label">Address Name</label>
                <input onChange={handleInput} name="addressName"  type="text" className="form-control" id="addressName" placeholder="Address Name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input onChange={handleInput} name="address" type="text" className="form-control" id="address" placeholder="Address"/>
            </div>
            <div className="mb-3">
                <label htmlFor="address2" className="form-label">Address 2</label>
                <input onChange={handleInput} name="address2" type="text" className="form-control" id="address2" placeholder="Address 2"/>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <label htmlFor="city" className="form-label">City</label>
                        <input onChange={handleInput} name="city" type="text" className="form-control" id="city" placeholder="City"/>
                    </div>
                    <div className="col">
                        <label htmlFor="province" className="form-label">Provice</label>
                        <input onChange={handleInput} name="province" type="text" className="form-control" id="province" placeholder="Province"/>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <label htmlFor="postalCode" className="form-label">Postal Code</label>
                        <input onChange={handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code"/>
                    </div>
                    <div className="col">
                        <label htmlFor="country" className="form-label">Country</label>
                        <input onChange={handleInput} name="country" type="text" className="form-control" id="country" placeholder="Country"/>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="row">
                        <div className="col">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input onChange={handleInput} name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com"/>
                    </div>
                    <div className="col">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input onChange={handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number"/>
                    </div>
                </div>
            </div>
            <button onClick={handleFormSubit} type="submit" className="btn btn-primary">Submit</button>
        </form>


        <br/>
        <h2>List of addressess saved to database</h2>

        {addresses.map(addr =>  

        <div key={addr._id} className="list-group">
            <div  className="list-group-item list-group-item-action" aria-current="false">
                <div  className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{addr.addressName}</h5>
                    <small>3 days ago</small>
                </div>
                <div>
                    <p className="m-1">{addr.address}</p>
                    <br/>
                    <div className="d-flex w-100 justify-content-between">
                        <small>{addr.city} {addr.province}, {addr.postalCode} - {addr.country}</small>
                        <small ><i onClick={() => grabAddressDetails(addr._id)} className="fa fa-i-cursor" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></small>
                    </div>
                </div>
            </div>
        </div>
        )} 





        {/* Address Change Modal */}
        <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div className="mb-3">
                        <label  htmlFor="addressName" className="form-label">Address Name</label>
                        <input onChange={handleInput} name="addressName" type="text" className="form-control" id="addressName" placeholder="Address Name" value={input.addressName} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input onChange={handleInput} name="address" type="text" className="form-control" id="address" placeholder="Address" value={input.address} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address2" className="form-label">Address 2</label>
                        <input onChange={handleInput} name="address2" type="text" className="form-control" id="address2" placeholder="Address 2" value={input.address2} />
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="city" className="form-label">City</label>
                                <input onChange={handleInput} name="city" type="text" className="form-control" id="city" placeholder="City" value={input.city}/>
                            </div>
                            <div className="col">
                                <label htmlFor="province" className="form-label">Provice</label>
                                <input onChange={handleInput} name="province" type="text" className="form-control" id="province" placeholder="Province" value={input.province}/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                                <input onChange={handleInput} name="postalCode" type="text" className="form-control" id="postalCode" placeholder="Postal Code" value={input.postalCode}/>
                            </div>
                            <div className="col">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input onChange={handleInput} name="country" type="text" className="form-control" id="country" placeholder="Country" value={input.country}/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input onChange={handleInput} name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" value={input.email}/>
                            </div>
                            <div className="col">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input onChange={handleInput} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" value={input.phone}/>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleFormSubit} type="submit" className="btn btn-primary">Submit</button>
                </form>
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={updateAddress}>Save changes</button>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}


export default CorpAddress