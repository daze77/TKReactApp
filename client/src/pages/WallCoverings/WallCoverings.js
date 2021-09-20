import React from 'react'

import WallCovCard from '../../components/GalleryCard/GalleryCard'
import WallCovJSON  from '../../utils/WallCovering.json'

import './WallCoverings.css'



function WallCoverings(){

    const URL = 'https://www.tonykoukos.com/media/catalog/cache/'


    return(
        <>
        <div className="container">
            <section >
                <h1>Wall Coverings</h1>
                <hr />
                <p>CUSTOM DIGITAL VINYL WALL COVERINGS…COMING SOON!!! OVER 330 DESIGNS TO CHOOSE FROM.</p>

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 wallCoveringCollection">
                    {WallCovJSON.map( wc =>(

                        <WallCovCard 
                        key={wc.Image}
                        Id = {wc.Id}
                        Title = {wc.Title}
                        ImageName = {URL + wc.Image}
                        Link = {wc.Link}



                        />

                    



                    ))}

                </div>

            </section>   
        </div>
      
      
        </>


    )


}


export default WallCoverings