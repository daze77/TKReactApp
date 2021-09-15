import React from 'react'


function Row(props){

    return(
        <div className = {`row ${props.rowclass} ${props.classstyle ? props.classstyle : ""}`}>{props.children}

        </div>
    )
}

export default Row