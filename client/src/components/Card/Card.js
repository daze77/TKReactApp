import React from 'react'

import Col from '../../components/Col/Col'
import './Card.css'



function Card(props){




    return(
        <>
            <Col>
                <div className={props.className} id={props.idName}>
                    <img key={props.Id} src={props.ImageName} className="card-img-top" alt={props.ImageName}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.Show}</h5>
                        <p className="card-text">{props.Title}</p>
                    </div>
                </div>
            </Col>

        </>



    )
}


export default Card