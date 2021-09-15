import React from 'react'

import Col from '../../components/Col/Col'
import './Card.css'



function Card(props){




    return(
        <>
            <Col classstyle={props.classstyle}>
                <div className={props.className} id={props.idName}>
                    <img key={props.Id} src={props.ImageName} className="card-img-top" alt={props.ImageName}/>
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