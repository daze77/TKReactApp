import React from 'react'

import Tonykphoto07 from '../../assets/images/media/tonykphoto07.jpg'
import Tonykphoto08 from '../../assets/images/media/tonykphoto08.jpg'
import Tonykphoto09 from '../../assets/images/media/tonykphoto09.jpg'
import Tonykphoto11 from '../../assets/images/media/tonykphoto11.jpg'
import Tonykphoto12 from '../../assets/images/media/tonykphoto12.jpg'
import Tonykphoto13 from '../../assets/images/media/shows-television-film1.jpg'








function Card(props){


    let mediaObj = {
        "Tonykphoto07": Tonykphoto07,
        "Tonykphoto08": Tonykphoto08,
        "Tonykphoto09": Tonykphoto09,
        "Tonykphoto11": Tonykphoto11,
        "Tonykphoto12": Tonykphoto12,
        "Tonykphoto13": Tonykphoto13
    }

    return(
        <>
            <div class="card mb-3">
                <img src={mediaObj[props.ImageName]} class="card-img-top" alt={props.ImageName}/>
                <div class="card-body">
                    <h5 class="card-title">{props.Show}</h5>
                    <p class="card-text">{props.Title}</p>
                </div>
            </div>

        </>



    )
}


export default Card