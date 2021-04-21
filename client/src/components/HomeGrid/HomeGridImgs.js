import React from 'react'
import {Link} from 'react-router-dom'


import Homelinkimg01 from '../../assets/images/homepage/homelinkimg01.jpg'
import Homelinkimg02 from '../../assets/images/homepage/homelinkimg02.jpg'
import Homelinkimg03 from '../../assets/images/homepage/homelinkimg03.jpg'
import Homelinkimg04 from '../../assets/images/homepage/homelinkimg04.jpg'
import Homelinkimg05 from '../../assets/images/homepage/homelinkimg05.jpg'
import Homelinkimg06 from '../../assets/images/homepage/homelinkimg06.jpg'
import Homelinkimg07 from '../../assets/images/homepage/homelinkimg07.jpg'
import Homelinkimg08 from '../../assets/images/homepage/homelinkimg08.jpg'









function HomeGridImgs(props){


    let homeObj = {
        "Homelinkimg01": Homelinkimg01,
        "Homelinkimg02": Homelinkimg02,
        "Homelinkimg03": Homelinkimg03,
        "Homelinkimg04": Homelinkimg04,
        "Homelinkimg05": Homelinkimg05,
        "Homelinkimg06": Homelinkimg06,
        "Homelinkimg07": Homelinkimg07,
        "Homelinkimg08": Homelinkimg08

    }

    return(
        <>
            <div class="col">
                <Link to={props.Link}>
                    <div class="card h-100 mb-1" id="cardformat">
                        <img key={props.Id} src={homeObj[props.ImageName]} class="card-img-top" alt={props.ImageName}/>
                        <div class="card-body">
                            <h5 class="card-title">{props.Show}</h5>
                            <p class="card-text">{props.Title}</p>
                        </div>
                    </div>
                </Link>
            </div>

        </>



    )
}


export default HomeGridImgs