import React, {useEffect, useState} from 'react'

import './CheckMarkSubmit.css'


function CheckMarkSubmit(props){

    console.log('[[[]]]', props.subResponse)

    const [myCheckClass, setmyCheckClass] = useState(false)


    useEffect(()=>{
         if(props.subResponse === true){
        setTimeout(()=>setmyCheckClass(true),2000)
        console.log('checkclass true', myCheckClass)
    }else {
        setmyCheckClass(false)
        console.log('checkclass false', myCheckClass)

    }   
    },[myCheckClass, props.subResponse])



    return(
        <>
        <div className="checkcenter">
            <div class={`${props.subResponse? "circle-loader":""} ${myCheckClass ? "load-complete" : ""}`}>
                <div class={`draw ${myCheckClass ? "checkmark" : ""}`}>
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




