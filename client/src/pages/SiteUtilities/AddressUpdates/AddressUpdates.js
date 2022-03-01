import React, {useState} from 'react'
import { useStoreContext } from '../../../utils/GlobalStore'
import Addressesss from '../AddressUpdates/Addressess'
import AddressForm from '../../../components/Address/AddressForm'
import fetchJSON from '../../../utils/API'
import './AddressUpdates.css'






function DatabaseUpdates(){

    const [{ addresses, currentAddress},dispatch ]= useStoreContext()

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

    const [showItem, setShowItem] = useState('block')
    const [showCheckModal, setShowCheckModal] = useState('block')



    function handleInput(event){
        let nam = event.target.name
        let val = event.target.value
        setmyInput({...myInput, [nam]: val})
    }


    function handleFormSubit(event){
        event.preventDefault()

        saveNewAddress(myInput)
        setShowItem('none')
        
        setTimeout(()=> {setShowItem('block')}, 4000)
        setmyInput({
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


    async function updateAddress(){
        const updatedAddress = myInput
        const {status, allAddresses, message} = await fetchJSON('/api/updatedaddress', 'post',  updatedAddress)

        if(!status){
            dispatch({type: "ALERT_MESSAGE", message})
            return
        }
        setShowCheckModal('none')
        setTimeout(()=> {setShowCheckModal('block')}, 4000)

        dispatch({type: "UPDATE_COMPINFO", addresses: allAddresses, currentAddress, message})
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


    function grabAddressDetails(id){
        const editAddress = addresses.filter(addr => addr._id === id)
        setmyInput(...editAddress)
    }

    return(
        <>
            <div className="container">

                <div className= 'utilitiesCard'>
                    <div style={showItem === "none" ? {display:'none'} : {display:'block'}}>
                        <h2 > New Address</h2>
                        <p>This is the page that all changes to Datbase can be entered by the owner of the site</p>
                        <AddressForm 
                            handleInput = {handleInput}
                            handleFormSubit = {handleFormSubit}
                            myInput = {myInput}
                            setmyInput = {setmyInput}
                            updateAddress = {updateAddress}
                            showCheckModal = {showCheckModal}

                        
                        />
                    </div>
                    <div className='checkMark' style={showItem === "none" ? {display:'block'} : {display:'none'}}>
                        <i className="bh fas fa-check fa-10x"></i>
                    </div>
                </div >

                <div className="utilitiesCard">
                    <Addressesss 
                        myInput = {myInput}
                        setmyInput = {setmyInput}
                        handleDelete = {handleDelete}
                        defaultAddressChange = {defaultAddressChange}
                        grabAddressDetails = {grabAddressDetails}
                    />
                </div>
            </div>
        </>
    )




}


export default DatabaseUpdates