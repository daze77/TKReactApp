import React, {useEffect, useState} from 'react'

import './HorizontalCard.css'


function HorzCard(props){




    const [cardStyle, setCardStyle] = useState(`maxWidth: "50px"`)


 



    return(
        <>

            <div class="card mb-3" style={{cardStyle}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={[props.ImageURL]+[props.ImageName]} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            {/* <h5 class="card-title">Card title</h5> */}
                            <p class="card-text">{props.Quote}</p>
                            <p class="card-text"><small class="text-muted">{props.Name}
                            <br/>
                            {props.LocationCity}, {props.LocationCountry}
                            </small></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HorzCard