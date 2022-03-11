import React, {useState} from 'react'

import './CheckMarkSubmit.css'


function CheckMarkSubmit(props){



    const [myCheckClass, setmyCheckClass] = useState(false)

    let circleLoader = props.subResponse ? "circle-loader" : ""

    circleLoader === "circle-loader" ? setTimeout(()=>setmyCheckClass(true),2000) : console.log('false')


    let loadComplete = !myCheckClass ? "" : "load-complete"
    let loadcheckmark = !myCheckClass ? "" : 'checkmark'

  


    return(
        <>
        <div className="checkcenter">

            <div class={`${circleLoader} ${loadComplete}`}>

                <div class={`draw ${loadcheckmark}`}>
    

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




