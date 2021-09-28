import React, {useEffect} from "react"
import {useStoreContext} from '../../utils/GlobalStore'

import fetchJSON from "../../utils/API"


function AddressCard(){
    const [{ currentAddress }, dispatch ]= useStoreContext()
    // const [compAddress, setCompAddress] = useState({})

    async function loadCompanyData(){
        const {allAddresses, currentAddress}  = await fetchJSON('/api/compaddresses')
         
        console.log('[we just got the information', currentAddress)

        
        dispatch({type: "UPDATE_ADDRESS", addresses: allAddresses, currentAddress: currentAddress})
        
    }



    useEffect(function(){
    loadCompanyData()        
    },[])


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