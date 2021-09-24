import React, { useEffect, useState } from 'react'
import fetchJSON from '../../utils/API'
import {useStoreContext} from '../../utils/GlobalStore'

function CorpAddress(){
    const [{ addresses }, dispatch ]= useStoreContext()
    const [input, setmyInput] =useState({})
    // const [address, setmyAddress] =useState({})

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

        dispatch({type: "UDPATE_COMPINFO", addresses: allAddresses})
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

        <div class="list-group">
            <div class="list-group-item list-group-item-action" aria-current="false">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{addr.addressName}</h5>
                    <small>3 days ago</small>
                </div>
                <p class="m-1">
                    {addr.address}<br/>
                    <small>{addr.city} {addr.province}, {addr.postalCode} - {addr.country}</small>
                </p>
            </div>
        </div>
        )} 

        </>




    )
}


export default CorpAddress