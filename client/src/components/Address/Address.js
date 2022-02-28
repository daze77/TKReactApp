import React, {useEffect} from "react"
import {useStoreContext} from '../../utils/GlobalStore'

import fetchJSON from "../../utils/API"


function AddressCard(){
    const [{ currentAddress }, dispatch ]= useStoreContext()





    useEffect(() => {

        async function loadCompanyData(){
            const {allAddresses, currentAddress}  = await fetchJSON('/api/compaddresses')
                    
            dispatch({type: "UPDATE_ADDRESS", addresses: allAddresses, currentAddress: currentAddress})
        }
        loadCompanyData()        
    },[dispatch])


   return (
        <>  
            <div className="addressCardFormat">
                <span>({currentAddress.addressName})</span><br/>
                <span>{currentAddress.address}</span><br/>
                {(currentAddress.address2) && 
                    <>
                    <span>{currentAddress.address2}</span> <br></br>
                    </>                 
                }
                <span>{currentAddress.city}, {currentAddress.province} {currentAddress.postalCode}</span><br/>
                <span>{currentAddress.country}</span><br/>
            </div>
        </>
    )
}

export default AddressCard