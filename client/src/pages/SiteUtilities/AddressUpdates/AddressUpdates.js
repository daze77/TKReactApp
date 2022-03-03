import React, {useState} from 'react'
import { useStoreContext } from '../../../utils/GlobalStore'
import Addressesss from '../AddressUpdates/Addressess'
import AddressForm from '../../../components/Address/AddressForm'
import ChangeAddressModal from '../../../components/Address/ChangeAddressModal'
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

        console.log(myInput)

    }

    function handleFormSubmit(event){
        event.preventDefault()

        const [form] = document.querySelectorAll('.needs-validation')

      

        if(!form.checkValidity()){
            form.classList.add('was-validated')
            return
        }
        
        saveNewAddress(myInput)
        setShowItem('none')
        
        setTimeout(()=> {
            setShowItem('block')
            document.querySelector('form').classList.remove('was-validated')
        }, 4000)
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

    function clearModal(){
        console.log('close button clicked')
        setmyInput({        
            addressName: "",
        address: "",
        address2: "",
        city: "",
        province: "",
        postalCode: "",
        country: "",
        email: "",
        phone: ""})
        setShowCheckModal('block')
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
                            handleFormSubmit = {handleFormSubmit}
                            myInput = {myInput}
                            setmyInput = {setmyInput}
                            updateAddress = {updateAddress}
                            showCheckModal = {showCheckModal}
                            clearModal = {clearModal}
                        />
                    </div>

                        <ChangeAddressModal 
                          handleInput = {handleInput}
                          myInput = {myInput}
                          updateAddress = {updateAddress}
                          showCheckModal = {showCheckModal}
                          clearModal = {clearModal}

                        />
                    <div className='checkMark' style={showItem === "none" ? {display:'block'} : {display:'none'}}>
                        <i className="checkFormat fas fa-check fa-10x"></i>
                        <p>Submitted Successfully</p>
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