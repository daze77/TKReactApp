import React from "react"
import { Link  } from "react-router-dom"




function SubFooter(){

    function getFullYear(){
        let date = new Date();
        let year = date.getFullYear();
        console.log((year));
        return year

    }
    return (
        <>  
            <div id="subfooter" class="d-flex justify-content-center align-items-end ">
                <span id="subcopyright" class="align-bottom">&copy; Copyright {getFullYear()} </span> 
                <strong id="subfooterCo" class="align-self-center"><Link to="/">Tony Koukos</Link> </strong>, All Rights Reserved.
            </div>
        </>
    )
}

export default SubFooter