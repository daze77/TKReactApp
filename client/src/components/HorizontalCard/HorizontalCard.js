import React from 'react'

import './HorizontalCard.css'


function HorzCard(props){



    return(
        <>

            <div className="card mb-3" style={{maxWidth: "500px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={[props.ImageURL]+[props.ImageName]} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {/* <h5 className="card-title">Card title</h5> */}
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