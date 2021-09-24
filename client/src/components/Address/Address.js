import React, {useEffect, useState} from "react"
import fetchJSON from "../../utils/API"


function AddressCard(){

    const [compAddress, setCompAddress] = useState({})

    async function loadCompanyData(){
        const {allAddresses}  = await fetchJSON('/api/compaddresses')
        // console.log('this is address get from front end', allAddresses)
        const companyAddress = allAddresses.filter(addr => addr.addressflag === true)
        // console.log(companyAddress)
        
        // console.log(`this is the address information from the db`, addressData)
        // console.log(`this is the address information from the db`, companyAddress)

        
         setCompAddress({
            addressName: companyAddress[0].addressName,
            address: companyAddress[0].address,
            address2: companyAddress[0].address2,
            city:companyAddress[0].city,
            country: companyAddress[0].country,
            postalCode: companyAddress[0].postalCode
        })
        
    }

    useEffect(function(){
    loadCompanyData()        
    },[])


   return (
        <>  
            <div className="addressCardFormat">
                <span>({compAddress.addressName})</span><br/>
                <span>{compAddress.address}</span><br/>
                <span>{compAddress.city}, {compAddress.province} {compAddress.postalCode}</span><br/>
                <span>{compAddress.country}</span><br/>
            </div>
        </>
    )
}

export default AddressCard