import React, {useEffect, useState} from "react"
// import { useStoreContext } from "../../utils/GlobalStore"
import fetchJSON from "../../utils/API"


function AddressCard(){

    // const [{ authOk }, dispatch ]= useStoreContext()


    const [compData, setCompData] = useState({})
    

  



    async function loadCompanyData(){
        const allCompData = await fetchJSON('/api/companyinfo')
        const companyAddress = allCompData.companyData[0].addressInformation
        
        
        console.log(`this is the allCompData data: `, allCompData)

        console.log(allCompData.status)
        console.log(allCompData.message)
        console.log(companyAddress)


        setCompData(
            {status: allCompData.status,
            message: allCompData.message,
            companyData: companyAddress}
        )
        
    }
        console.log(`address component`,compData)

        console.log(compData.status)
        console.log(compData.message)
        console.log(compData.companyData.addressName)



        const addressName = compData.companyData.addressName
        const address = compData.companyData

        console.log(addressName)
        console.log(address)


        

    useEffect(function(){
        loadCompanyData()


        
    },[])



    return (

        <>  
            <div className="addressCardFormat">
                <span>({addressName})</span><br/>
                <span>{address.address}</span><br/>
                <span>{address.city}, {address.province} {address.postalCode}</span><br/>
                <span>Canada</span><br/>
            </div>
        </>
    )
}

export default AddressCard