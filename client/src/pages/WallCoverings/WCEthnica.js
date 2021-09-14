import React from 'react'

import AbstractCard from '../../components/GalleryCard/GalleryCard'

import WCJSON from '../../utils/WallCovering.json'


function WCEthnica(){

    const URL = 'https://www.tonykoukos.com/media/catalog/product/cache/1/thumbnail/314x299/9df78eab33525d08d6e5fb8d27136e95/'

return(
    <>

    <div className="container">
        <section >
            <h1>Ethnica</h1>
            <hr />


            <div className="row row-cols-1 row-cols-md-3 g-3 wtpCollection gallerySubMenus">
                {WCJSON[5].SubLink.map( gcAS => (
                    
                    
                    <AbstractCard 

                    Id = {gcAS.Id}
                    Title = {gcAS.Title}
                    ImageName = {URL + gcAS.Image}
                 



                    />

                
                    ))


                }

            </div>

        </section>   
    </div>

         

    </>






)



}



export default WCEthnica