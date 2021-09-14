import React from 'react'

import ClassicsCard from '../../components/GalleryCard/GalleryCard'
import GCJSON  from '../../utils/GalleryColGrid.json'

// console.log(GCJSON[0].SubLink)


function Classics() {

    const URL = 'https://www.tonykoukos.com/media/catalog/product/cache/1/thumbnail/314x299/9df78eab33525d08d6e5fb8d27136e95/g/a/'





return(
    <>

    <div className="container">
        <section >
            <h1>Classics</h1>
            <hr />


            <div className="row row-cols-1 row-cols-md-3 g-3 wtpCollection gallerySubMenus">
                {GCJSON[1].SubLink.map( gcAS => (

                   

                    <ClassicsCard 

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


export default Classics