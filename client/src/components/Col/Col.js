import React from 'react'


function Col(props){


    // console.log('[[[props]]', props)
  
    return(
   
        <div className = {`col ${props.classstyle ? props.classstyle : ""}`} style={props.style}  >
            {props.children}
        </div>
    )
}



export default Col