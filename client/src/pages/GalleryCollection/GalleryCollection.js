import React from 'react'
import Pic1 from '../../assets/images/gallery/00b90e066d7b691497c54f43affe6b81.jpg'
import Pic2 from '../../assets/images/gallery/00b90e066d7b691497c54f43affe6b81.jpg'
import Pic3 from '../../assets/images/gallery/00b90e066d7b691497c54f43affe6b81.jpg'
import Pic4 from '../../assets/images/gallery/00b90e066d7b691497c54f43affe6b81.jpg'
import Pic5 from '../../assets/images/gallery/00b90e066d7b691497c54f43affe6b81.jpg'
import Pic6 from '../../assets/images/gallery/00b90e066d7b691497c54f43affe6b81.jpg'


function GalleryCollection(){




    return(
    <>
	    <div class="container">
            <section >
                <h1>Gallery Collection</h1>
                <hr />

                <p>The Gallery Collection is a compilation of works from around the world. Each work is limited to 24 pieces and one artist proof, and is available 
                    in three sizes in an edition of 6. The remainder has been archived for customization. Art, enhancing the overall look and feel of a space, is 
                    also an investment that can be passed down to future generations. Each piece is printed on a premium pearl paper and face-mounted to acrylic with 
                    hanging hardware allowing the pieces to slightly float off the wall. All pieces are signed and numbered. Pieces can also be customized and framed as well. 
                    To discuss your fine art needs and customize your gallery piece, please email <a href="mailto:tony@tonykoukos.com">tony@tonykoukos.com</a>
                </p>
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col">
                        <img src={Pic1}/>
                        <img src={Pic2}/>

                    </div>
                    <div class="col">
                        <img src={Pic3}/>
                        <img src={Pic4}/>
                    </div>
                    <div class="col">
                        <img src={Pic5}/>
                        <img src={Pic6}/>

                    </div>

                    
                </div>

            </section>   
        </div>



    </>
    )


}


export default GalleryCollection