import React from 'react'


import TravelLogueJSON from '../../utils/Travelogue.json'
const Col1 = TravelLogueJSON.filter((Country, index) => (index>0))
console.log('COl1', Col1)


const CitiesTravelled = Col1.map((travel) => travel.Cities.map((cities)=>cities))

console.log('testing this out', CitiesTravelled)



function TravelLocations(props){



    return(
    <>

        <ul>
            <li>{props.Country}
                <ul>

                        {props.Cities}
    
                        
                    
                </ul>
            </li>
        </ul>

    </>
    )


}


export default TravelLocations