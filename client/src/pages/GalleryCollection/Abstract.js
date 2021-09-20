import React from 'react'

import Row from '../../components/Row/Row'
// import Card from '../../components/Card/Card'
import AbstractCard from '../../components/GalleryCard/GalleryCard'
import GCJSON  from '../../utils/GalleryColGrid.json'


function Abstract() {


 const URL = 'https://www.tonykoukos.com/media/catalog/product/cache/1/thumbnail/314x299/9df78eab33525d08d6e5fb8d27136e95/g/a/'



return(

   

    <>
    <div className="container">
        <section >
            <h1>Abstract</h1>
            <hr />

            <Row rowclass="row-cols-1 row-cols-md-3 g-3 wtpCollection "
                classstyle = "wtpCollection gallerySubMenus">
         
                {GCJSON[0].SubLink.map( gcAS => (

                    <AbstractCard 

                    key = {gcAS.ImageName}
                    Id = {gcAS.Id}
                    Title = {gcAS.Title}
                    ImageName = {URL + gcAS.Image}



                    />

                


                ))}

            </Row>
        </section>   
    </div>
  
  
    </>



)




}


export default Abstract