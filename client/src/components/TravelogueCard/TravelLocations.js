import React from 'react'

import TravelCities from './TravelCities'

import TravelLogueJSON from '../../utils/Travelogue.json'
const Col1 = TravelLogueJSON.filter((Country, index) => (index>0))
console.log('COl1', Col1)










function TravelLocations(props){



    return(
    <>


            <ul>
                <li>{props.Country}
                    <ul>
                        {Col1.map((cities) => (cities.Cities.map(allcities => (
                        
                            <TravelCities 
                            Cities={allcities}
                            
                            />
                            ))))}
                            
                        
                    </ul>
                </li>
            </ul>



    </>
    )


}


export default TravelLocations