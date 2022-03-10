import React, {useState} from 'react'

import './CheckMarkSubmit.css'


function CheckMarkSubmit(props){

    console.log(props.display)

    const [myCheckClass, setmyCheckClass] = useState(false)

    let loadComplete = !myCheckClass ? "" : "load-complete"
    let loadcheckmark = !myCheckClass ? "" : 'checkmark'
    let circleLoader = props.display ? "circle-loader" : ""
    function handleToggle(){
        setTimeout(() => {
            setmyCheckClass(true)
        }, 3000)

    }

    return(
        <>
            <div class={`${circleLoader} ${loadComplete}`}>
                <div class={`draw ${loadcheckmark}`}></div>
            </div>
        </>
    )
}






export default CheckMarkSubmit




