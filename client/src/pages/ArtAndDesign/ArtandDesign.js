import React from 'react'

import ArtamdDesignCard from '../../components/GalleryCard/GalleryCard'
import ArtandDesignJSON  from '../../utils/ArtAndDesign.json'

import './ArtandDesign.css'



// let aaaaaa = []

// function createJSON(){
//     for (var i=100; i<350; i++){
//         let b = {
//                 "Id": Number(`${i}`),
//                 "Title": `ad0${i}c-c`,
//                 "Image": `ad0${i}c-c.jpg`,
//                 "ImageName": `ad0${i}c-c`,
//                 "Link": "",

//                 }
//                 aaaaaa.push(b)

                
//         }
//         console.log(aaaaaa)
// }

// createJSON()






function ArtandDesign(){










    const URL = 'https://www.tonykoukos.com/media/catalog/product/cache/1/thumbnail/314x299/9df78eab33525d08d6e5fb8d27136e95/a/d/'




    return(

        <>
        <div class="container">
            <section >
                <h1>Art and Design</h1>
                <hr />


                <div class="row row-cols-1 row-cols-md-3 g-3 wtpCollection">
                    {ArtandDesignJSON.map( ad =>(

                        <ArtamdDesignCard 

                        Id = {ad.Id}
                        Title = {ad.Title}
                        ImageName = {URL + ad.Image}



                        />

                    



                    ))}

                </div>

            </section>   
        </div>
      
      
        </>
















    )


}


export default ArtandDesign



