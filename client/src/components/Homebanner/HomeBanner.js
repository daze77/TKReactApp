import React from 'react'
import {Link} from 'react-router-dom'

import travel from '../../assets/images/homepage/travelimg.jpg'









function HomeBanner(){




    return(
        <>
            
            <Link to="travelogue">
                <div className="card ">
                    <img src={travel} className="card-img" alt="travel"/>

                </div>
            </Link>
        

        </>



    )
}


export default HomeBanner