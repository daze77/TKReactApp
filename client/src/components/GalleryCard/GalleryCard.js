import React from 'react'
import {Link} from 'react-router-dom'
import './GalleryCard.css'




function GalleryCard (props) {
    let Title = props.Title.toUpperCase()

    return(
        <>
            <div class="col ">
                <Link to={props.Link}>
                    <div class="card gallerygrid"> 
                        <img key={props.Id} class=" card-img"  src={props.ImageName} alt={props.ImageName}/>
                        <div class="card-img-overlay">
                            <h5 class="card-title  w-100 ">{Title}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}




export default GalleryCard