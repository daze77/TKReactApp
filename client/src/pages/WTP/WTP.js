import React from 'react'

import WTPCard from '../../components/GalleryCard/GalleryCard'
import WTPJSON  from '../../utils/wtp.json'

import './WTP.css'


// Import Photos



function WTP(){

     const URL = 'https://www.tonykoukos.com/media/catalog/cache/'




    return(
        <>
        <div class="container">
            <section >
                <h1>World Travel Photography</h1>
                <hr />

                <div class="row row-cols-1 row-cols-md-4 g-3 wtpCollection">
                    {WTPJSON.map( wtp =>(

                        <WTPCard 

                        Id = {wtp.Id}
                        Title = {wtp.Title}
                        ImageName = {URL + wtp.Image}



                        />

                    



                    ))}

                </div>

            </section>   
        </div>
        </>
    )


}


export default WTP