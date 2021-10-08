import React from 'react'

import './HorizontalCard.css'


function HorzCard(props){



    return(
        <>

            <div className="card mb-3" style={{maxWidth: "100%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        {props.ImageName && <img id="testimonial" className="img-fluid rounded-start" src={[props.ImageURL]+[props.ImageName]} alt="..."/>}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{props.Quote}</p>
                            <p className="card-text"><small className="text-muted">{props.Name}
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