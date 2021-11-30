import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Col from '../Col/Col'
import './GalleryCard.css'
import {useCreateObserver}  from '../LazyLoadImages/IntersectionObserver'



function GalleryCard (props) {
    let Title = props.Title.toUpperCase()

    const [isInView, setIsInView] = useState(false);
    const [propsCheck, setPropsCheck] = useState(false)  
    const imgRef = useRef();

    useCreateObserver(imgRef, () => {
        setIsInView(true)
    })

    useEffect(() => {
        if(props.Price){
            setPropsCheck(true)
        }
    },[])


    return(
        <>
            <Col key={props._id} classstyle = 'gallerycard' style={isInView ? {maxHeight:"auto"} : {height:"1000px"}}>
                <Link to={{
                    pathname: props.Link,
                    state: props.Title
                    }}>
                    <div  ref={imgRef}  className="card gallerygrid"  > 
                         <img className="card-img" src={isInView ? props.ImageName : ""} alt={props.ImageName}/>
                        <div className="card-img-overlay">
                            <h5 className="card-title w-100 ">{Title}</h5>
                            {(propsCheck) ? <button type="button" class="btn btn-primary" onClick={() => props.AddToBasket({"Title": props.Title, "ID": props._id, "ImageName": props.ImageName, "URL": URL})}>Buy</button> : ''}
                            
                        </div>
                    </div>
                </Link>
            </Col>
        </>
    )
}

export default GalleryCard