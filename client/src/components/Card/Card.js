import React, {useState, useRef} from 'react'
import Col from '../Col/Col'
import './Card.css'
import {useCreateObserver}  from '../../components/LazyLoadImages/IntersectionObserver2'

function Card(props){
    const [isInView, setIsInView] = useState(false);  
    const imgRef = useRef();

    useCreateObserver(imgRef, () => {
        setIsInView(true)

    })

    return(
        <>
            <Col key={props._id} classstyle={props.classstyle} style={{maxHeight: "auto", maxWidth: "100%"}}>
                <div className={props.className} id={props.idName} ref={imgRef}>
                    {isInView && (<img  key={props.Id} src={props.ImageName} loading="lazy" className="card-img-top" alt={props.ImageName}/>)}
                    <div className={`${props.cardbodyStyle ? props.cardbodyStyle : "card-body"}`} >
                        <h5 className={`'card-title' ${props.h5className ? props.h5className : ""}`}>{props.Title}</h5>
                        <p className="card-text">{props.Text}</p>
                    </div>
                </div>
            </Col>

        </>
    )
}


export default Card