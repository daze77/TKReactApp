import React from 'react'

import './PublishedCard.css'


function PubCard(props){

    return(
        <>
            <div class="col">
                <div class="card h-100 mb-1" id="pubcardformat">
                    <img key={props.Id} src={[props.ImageName]} class="card-img-top" alt={props.ImageName}/>
                    <div class="card-body">
                        <p class="card-text">{props.Title}</p>
                    </div>
                </div>
            </div>

        </>



    )
}


export default PubCard