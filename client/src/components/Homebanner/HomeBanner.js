import React from 'react'
import {Link} from 'react-router-dom'

import travel from '../../assets/images/homepage/travelimg.jpg'









function HomeBanner(){




    return(
        <>
            
            <Link to="travelogue">
                <div class="card ">
                    <img src={travel} class="card-img" alt="travel"/>

                </div>
            </Link>
        

        </>



    )
}


export default HomeBanner