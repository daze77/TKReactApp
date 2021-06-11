import React from 'react'

import UrbanoCard from '../../components/GalleryCard/GalleryCard'
import GCJSON  from '../../utils/GalleryColGrid.json'



function Urbano() {

    const URL = 'https://www.tonykoukos.com/media/catalog/product/cache/1/thumbnail/314x299/9df78eab33525d08d6e5fb8d27136e95/g/a/'






return(
    <>

<div class="container">
        <section >
            <h1>Urbano</h1>
            <hr />


            <div class="row row-cols-1 row-cols-md-3 g-3 wtpCollection">
                {GCJSON[5].SubLink.map(gcAS => (

                    <UrbanoCard 

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


export default Urbano