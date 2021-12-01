import React, {useState, useRef,useEffect} from 'react'
import Col from '../Col/Col'
import './Card.css'
import {useCreateObserver}  from '../LazyLoadImages/IntersectionObserver'

function Card(props){
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
            <Col key={props._id} classstyle={props.classstyle} style={isInView ? {maxHeight:"auto"} : {height:"1000px"}} >
                <div ref={imgRef} className={props.className} id={props.idName} >
                   <img  key={props.Id} src={isInView ? props.ImageName : ""} className="card-img-top" alt={props.ImageName}/>
                    <div className={`${props.cardbodyStyle ? props.cardbodyStyle : "card-body"}`} >
                        <h5 className={`'card-title' ${props.h5className ? props.h5className : ""}`}>{props.Title}</h5>
                        {(propsCheck) ? <button type="button" class="btn btn-primary" onClick={() => props.AddToBasket({"Title": props.Title, "ID": props._id, "ImageName": props.ImageName})} onMouseOver={()=>props.ShowBuyBtn({ID:props._id})} onMouseOut={()=>props.ShowPriceBtn({ID:props._id})}>{props.Price}
                        </button> : ''}
                        <p className="card-text">{props.Text}</p>
                    </div>
                </div>
            </Col>

        </>
    )
}


export default Card