import React from 'react'

import './TheArtist.css'
import Biography from './Biography'
import Philanthropy from './Philanthropy'
import ShowsTVFilm from './ShowsTVFilm'
import Published from './Published'
import PhotographyTips from './PhotographyTips'
import PhotoGallery from './PhotoGallery'






function TheArtist(){




    return(
    <>


        <div class="container">

            <Biography />
            <Philanthropy />
            <ShowsTVFilm />
            <Published />
            <PhotographyTips />
            <PhotoGallery />

        </div>



    </>
    )


}


export default TheArtist