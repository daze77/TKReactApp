import React from 'react'

import C2 from '../../assets/images/sliderImages/2.jpg'
import C3 from '../../assets/images/sliderImages/3.jpg'
import C4 from '../../assets/images/sliderImages/4.jpg'
import C5 from '../../assets/images/sliderImages/5.jpg'
import C6 from '../../assets/images/sliderImages/6.jpg'
import C7 from '../../assets/images/sliderImages/7.jpg'




function CarouselImage(props){

    let CarouselImg={
    
        "2": C2,
        "3": C3,
        "4": C4,
        "5": C5,
        "6": C6,
        "7": C7

    }

    return(
        <>  
           
            <div className="carousel-item" >
                <img key={props.Key} src={CarouselImg[props.Id]} className="d-block w-100" alt={props.Id}/>
                <div className="carousel-caption d-none d-md-block">
                    <h5 >Auto slide label</h5>
                    <p >Some representative placeholder content for the first slide.</p>
                </div>
            </div>

        </>

    )
}


export default CarouselImage