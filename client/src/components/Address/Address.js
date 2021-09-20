import React, {useEffect, useState} from "react"
import fetchJSON from "../../utils/API"


function AddressCard(){



    // const [compData, setCompData] = useState({})
    const [compAddress, setCompAddress] = useState({})


  



    async function loadCompanyData(){
        const allCompData = await fetchJSON('/api/companyinfo')
        const companyAddress = allCompData.companyData[0].addressInformation
        
        
        // setCompData(
        //     {status: allCompData.status,
        //     message: allCompData.message,
        // }
        // )

        setCompAddress({
            addressName: companyAddress.addressName,
            address: companyAddress.address,
            address2: companyAddress.address2,
            city:companyAddress.city,
            country: companyAddress.country,
            postalCode: companyAddress.postalCode

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