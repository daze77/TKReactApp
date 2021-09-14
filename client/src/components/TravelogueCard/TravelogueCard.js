import React from 'react'

import TravelLocations from './TravelLocations'
import TravelLogueJSON from '../../utils/Travelogue.json'


import Passport from '../../assets/images/travelogue/passport.jpg'
import './TravelogueCard.css'



function TravelogueCard(){
    console.log("length of JSON", TravelLogueJSON.length)


    const Col1 = TravelLogueJSON.filter((Country, index) => (index < 15))
    const Col2 = TravelLogueJSON.filter((country, index) => (index >14 && index <28))
    const Col3 = TravelLogueJSON.filter((country, index) => (index>27 && index <37))
    const Col4 = TravelLogueJSON.filter((country, index) => (index>36))


    return(
    <>
        
        <div className="clearfix">
            <img src={Passport} className="col-sm-12 col-md-8 float-md-start mb-3 me-3" alt="..."/>
            <div>
                <h3>TONY KOUKOS' PASSPORT</h3>
                <p>Over 40 countries and counting!</p>
            </div>
        </div>
        <br />

        <div className="row row-cols-1 row-cols-md-4  pt-2"  >
            <div className="col">
                {Col1.map((places) =>(
                    <TravelLocations
                        Country={places.Country}
                        Cities={places.Cities.map((cities)=> <li className="visitedcities"><i className="fas fa-caret-right"></i> {cities}</li>)}
                    />
                ))}    
            </div>
            <div className="col">
                {Col2.map((places) =>(
                    <TravelLocations
                        Country={places.Country}
                        Cities={places.Cities.map((cities)=> <li className="visitedcities"><i className="fas fa-caret-right"></i> {cities}</li>)}
                    />
                ))}    
            </div>
            <div className="col">
                {Col3.map((places) =>(
                    <TravelLocations
                        Country={places.Country}
                        Cities={places.Cities.map((cities)=> <li className="visitedcities"><i className="fas fa-caret-right"></i> {cities}</li>)}
                    />
                ))}    
            </div>
            <div className="col">
                {Col4.map((places) =>(
                    <TravelLocations
                        Country={places.Country}
                        Cities={places.Cities.map((cities)=> <li className="visitedcities"><i className="fas fa-caret-right"></i> {cities}</li>)}
                    />
                ))}    
            </div>
        </div>

    </>
    )


}


export default TravelogueCard