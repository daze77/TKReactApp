import React from 'react'
import {Link} from 'react-router-dom'
import './GalleryCard.css'




function GalleryCard (props) {
    let Title = props.Title.toUpperCase()

    
    return(
        <>
            <div className="col gallerycard">
            <Link to={{
                    pathname: props.Link,
                    state: props.Title
                }}>
                    <div className="card gallerygrid"> 
                        <img key={props.Id} className=" card-img"  src={props.ImageName} alt={props.ImageName}/>
                        <div className="card-img-overlay">
                            <h5 className="card-title  w-100 ">{Title}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}




export default GalleryCard