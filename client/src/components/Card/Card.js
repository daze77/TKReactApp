import React from 'react'

import Col from '../../components/Col/Col'
import './Card.css'



function Card(props){




    return(
        <>
            <Col>
                <div className={props.className} id={props.idName}>
                    <img key={props.Id} src={props.ImageName} class="card-img-top" alt={props.ImageName}/>
                    <div class="card-body">
                        <h5 class="card-title">{props.Show}</h5>
                        <p class="card-text">{props.Title}</p>
                    </div>
                </div>
            </Col>

        </>



    )
}


export default Card