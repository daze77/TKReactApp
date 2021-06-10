import React from 'react'
import {Link} from 'react-router-dom'





function GalleryCard (props) {
    return(
        <>
            <div class="col ">
                <Link to={props.Link}>
                    <div class="card gallerygrid"> 
                        <img key={props.Id} class=" card-img"  src={props.Image}/>
                        <div class="card-img-overlay">
                            <h5 class="card-title position-absolute top-50  w-100 text-center">{props.Title}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}




export default GalleryCard