import React from 'react'

import './PublishedCard.css'

import Tonykphoto12_1 from '../../assets/images/published/tonykphoto12_1.jpg'
import Tonykphoto13 from '../../assets/images/published/tonykphoto13.jpg'
import Tonykphoto14 from '../../assets/images/published/tonykphoto14.jpg'
import Tonykphoto15 from '../../assets/images/published/tonykphoto15.jpg'
import Tonykphoto16 from '../../assets/images/published/tonykphoto16.jpg'
import Tonykphoto17 from '../../assets/images/published/tonykphoto17.jpg'
import Tonykphoto18 from '../../assets/images/published/tonykphoto18.jpg'
import Tonykphoto19 from '../../assets/images/published/tonykphoto19.jpg'


function PubCard(props){


    let pubObj = {
        "Tonykphoto12_1": Tonykphoto12_1,
        "Tonykphoto13": Tonykphoto13,
        "Tonykphoto14": Tonykphoto14,
        "Tonykphoto15": Tonykphoto15,
        "Tonykphoto16": Tonykphoto16,
        "Tonykphoto17": Tonykphoto17,
        "Tonykphoto18": Tonykphoto18,
        "Tonykphoto19": Tonykphoto19
    }

    return(
        <>
            <div class="col">
                <div class="card h-100 mb-1" id="pubcardformat">
                    <img key={props.Id} src={pubObj[props.ImageName]} class="card-img-top" alt={props.ImageName}/>
                    <div class="card-body">
                        <p class="card-text">{props.Title}</p>
                    </div>
                </div>
            </div>

        </>



    )
}


export default PubCard