import React from 'react'

import './TravelogueCard.css'



function TravelLocations(props){



    return(
    <>

        <ul key={props._id} id="travListStyle">
            <li id="travelList"><span className="visitedcountries">{props.Country}</span>
                <ul id="cityliststyle">
                    {props.Cities}
                </ul>
            </li>
        </ul>

    </>
    )


}


export default TravelLocations