import React from 'react'

import AbstractCard from '../../components/GalleryCard/GalleryCard'

import WCJSON from '../../utils/WallCovering.json'


function WCDetails(){

    const URL = 'https://www.tonykoukos.com/media/catalog/product/cache/1/thumbnail/314x299/9df78eab33525d08d6e5fb8d27136e95/t/i/'

return(
    <>

    <div class="container">
        <section >
            <h1>Details</h1>
            <hr />


            <div class="row row-cols-1 row-cols-md-3 g-3 wtpCollection gallerySubMenus">
                {WCJSON[3].SubLink.map( gcAS => (
                    
                    
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



export default WCDetails