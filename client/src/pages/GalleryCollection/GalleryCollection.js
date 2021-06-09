import React from 'react'

import Pic1 from '../../assets/images/gallery/abstract.jpg'
import Pic2 from '../../assets/images/gallery/classics.jpg'
import Pic3 from '../../assets/images/gallery/opulence.jpg'
import Pic4 from '../../assets/images/gallery/people.jpg'
import Pic5 from '../../assets/images/gallery/themodern.jpg'
import Pic6 from '../../assets/images/gallery/urbano.jpg'

import './GalleryCollection.css'


function GalleryCollection(){




    return(
    <>
	    <div class="container">
            <section >
                <h1>Gallery Collection</h1>
                <hr />

                <p>The Gallery Collection is a compilation of works from around the world. Each work is limited to 24 pieces and one artist proof, and is available in three sizes in an edition of 6. The remainder has been archived for customization. Art, enhancing the overall look and feel of a space, is also an investment that can be passed down to future generations. Each piece is printed on a premium pearl paper and face-mounted to acrylic with hanging hardware allowing the pieces to slightly float off the wall. All pieces are signed and numbered. Pieces can also be customized and framed as well. To discuss your fine art needs and customize your gallery piece, please email <a href="mailto:tony@tonykoukos.com">tony@tonykoukos.com</a>
                </p>
                <div class="row row-cols-1 row-cols-md-3 g-3 galleryCollection">
                    <div class="col ">
                        <div class="card gallerygrid"> 
                            <img class=" card-img"  src={Pic1}/>
                            <div class="card-img-overlay">
                                <h5 class="card-title position-absolute top-50  w-100 text-center">ABSTRACT</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card gallerygrid"> 
                            <img class=" card-img"  src={Pic3}/>
                            <div class="card-img-overlay">
                                <h5 class="card-title position-absolute top-50  w-100 text-center">CLASSICS</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card gallerygrid"> 
                            <img class=" card-img"  src={Pic5}/>
                            <div class="card-img-overlay">
                                <h5 class="card-title position-absolute top-50  w-100 text-center">OPULENCE</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card gallerygrid"> 
                            <img class=" card-img"  src={Pic2}/>
                            <div class="card-img-overlay">
                                <h5 class="card-title position-absolute top-50  w-100 text-center">PEOPLE</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card gallerygrid"> 
                            <img class=" card-img"  src={Pic4}/>
                            <div class="card-img-overlay">
                                <h5 class="card-title position-absolute top-50  w-100 text-center">MODERN</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card gallerygrid"> 
                            <img class=" card-img"  src={Pic6}/>
                            <div class="card-img-overlay">
                                <h5 class="card-title position-absolute top-50  w-100 text-center">URBANO</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </div>



    </>
    )


}


export default GalleryCollection