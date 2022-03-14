import React, {useEffect, useState} from 'react'

import './CheckMarkSubmit.css'


function CheckMarkSubmit(props){


    const [myCheckClass, setmyCheckClass] = useState(false)


    useEffect(()=>{
         if(props.subResponse === true){
        setTimeout(()=>setmyCheckClass(true),2000)
    }else {
        setmyCheckClass(false)

    }   
    },[myCheckClass, props.subResponse])



    return(
        <>
        <div className="checkcenter">
            <div className={`${props.subResponse? "circle-loader":""} ${myCheckClass ? "load-complete" : ""}`}>
                <div className={`draw ${myCheckClass ? "checkmark" : ""}`}>
                </div>
            </div>
        </div>
        <div className={`${props.alertType} ${!props.subScriptionConfirm ? "subscriptionAlert" : ""} mb-3`}>
            {props.subScriptionMessage}
        </div>
        </>
    )
}






export default CheckMarkSubmit




