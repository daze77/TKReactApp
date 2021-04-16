import React from 'react'
import Tonykphoto07 from '../../assets/images/media/tonykphoto07.jpg'





function Card(props){

    return(
        <>
            <div class="card mb-3">
                <img src={props.ImageName} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.Show}</h5>
                    <p class="card-text">{props.Title}</p>
                </div>
            </div>

        </>



    )
}


export default Card