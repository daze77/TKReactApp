import React from 'react'

import GalleryCard from '../../components/GalleryCard/GalleryCard'
import GalleryJSON from '../../utils/GalleryColGrid.json'

import Pic1 from '../../assets/images/gallery/abstract.jpg'
import Pic2 from '../../assets/images/gallery/classics.jpg'
import Pic3 from '../../assets/images/gallery/opulence.jpg'
import Pic4 from '../../assets/images/gallery/people.jpg'
import Pic5 from '../../assets/images/gallery/themodern.jpg'
import Pic6 from '../../assets/images/gallery/urbano.jpg'


import abstract from '../../assets/images/gallery/abstract.jpg'
import classics from '../../assets/images/gallery/classics.jpg'
import opulence from '../../assets/images/gallery/opulence.jpg'
import people from '../../assets/images/gallery/people.jpg'
import themodern from '../../assets/images/gallery/themodern.jpg'
import urbano from '../../assets/images/gallery/urbano.jpg'



import './GalleryCollection.css'
import { PromiseProvider } from 'mongoose'


function GalleryCollection(){

    let ImgObj = {
        "abstract": abstract,
        "classics": classics,
        "opulence": opulence,
        "people": people,
        "themodern": themodern,
        "urbano": urbano,
    }

    return(
    <>
	    <div class="container">
            <section >
                <h1>Gallery Collection</h1>
                <hr />

                <p>The Gallery Collection is a compilation of works from around the world. Each work is limited to 24 pieces and one artist proof, and is available in three sizes in an edition of 6. The remainder has been archived for customization. Art, enhancing the overall look and feel of a space, is also an investment that can be passed down to future generations. Each piece is printed on a premium pearl paper and face-mounted to acrylic with hanging hardware allowing the pieces to slightly float off the wall. All pieces are signed and numbered. Pieces can also be customized and framed as well. To discuss your fine art needs and customize your gallery piece, please email <a href="mailto:tony@tonykoukos.com">tony@tonykoukos.com</a>
                </p>

     
                <div class="row row-cols-1 row-cols-md-3 g-3 galleryCollection">
                    {GalleryJSON.map(gallery => (

                        <GalleryCard

                        Id = {gallery.imgae}
                        Title ={gallery.Title}
                        Image = {ImgObj[gallery.ImageName]}
                        Link = {gallery.Link}

                        />

                    ))}
                </div>
            </section>   
        </div>



    </>
    )


}


export default GalleryCollection