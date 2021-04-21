import React from 'react'

import TravelLocations from './TravelLocations'
import TravelLogueJSON from '../../utils/Travelogue.json'


import Passport from '../../assets/images/travelogue/passport.jpg'
import './TravelogueCard.css'



function TravelogueCard(){
    console.log("length of JSON", TravelLogueJSON.length)


    const Col1 = TravelLogueJSON.filter((Country, index) => (index>0))
    const Col2 = TravelLogueJSON.filter((country, index) => (index>0))
    const Col3 = TravelLogueJSON.filter((country, index) => (index>0))
    const Col4 = TravelLogueJSON.filter((country, index) => (index>0))

    console.log('these are my travel results', Col1)
    // console.log('these are my travel results', Col1city)
    // console.log('these are my travel results', test)


    const Country = Col1.map((travel) => travel.Country)
    const cities1 = Col1.map((travel) => travel.Cities.map((cities)=>cities))

    console.log('new countries list', Country)
    console.log('new cities list', cities1)

    const Travel={
        Countries: Country,
        Cities: cities1
    }

    console.log(Travel)

    return(
    <>
        
                <div class="clearfix">
                    <img src={Passport} class="col-sm-12 col-md-4 float-md-start mb-3 me-3" alt="..."/>
                    <div>
                        <h3>TONY KOUKOS' PASSPORT</h3>
                        <p>Over 40 countries and counting!</p>
                    </div>
                </div>


                <div>

                {Col1.map((places) =>(
                        <TravelLocations
                            Country={places.Country}
                            Cities={places.Cities.map((cities)=> <li>{cities}</li>)}
                            />
                    
                    ))}    

                    
                    

                </div>






    </>
    )


}


export default TravelogueCard