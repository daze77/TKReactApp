import React from 'react'


function Col(props){
  
    return(
   
        <div className = {`col ${props.classstyle ? props.classstyle : ""}`} >
            {props.children}
        </div>
    )
}



export default Col