import React from 'react'

import './TravelogueCard.css'



function TravelLocations(props){



    return(
    <>

        <ul>
            <li id="travelList"><span class="visitedcountries">{props.Country}</span>
                <ul id="cityliststyle">
                    {props.Cities}
                </ul>
            </li>
        </ul>

    </>
    )


}


export default TravelLocations