import React from "react"
import { Link  } from "react-router-dom"




function SubFooter(){

    function getFullYear(){
        let date = new Date();
        let year = date.getFullYear();
        return year

    }
    return (
        <>  
            <div id="subfooter" className="d-flex justify-content-center align-items-center ">
                <span id="subcopyright" >&copy; Copyright {getFullYear()} </span> 
                <strong id="subfooterCo" ><Link to="/">Tony Koukos</Link> </strong>, All Rights Reserved.
            </div>
        </>
    )
}

export default SubFooter