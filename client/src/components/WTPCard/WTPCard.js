import React from 'react'

import './WTPCard.css'




function WTPCard (props) {
    let Title = props.Title.toUpperCase()



    
    return(
        <>
            <div className="col wtp" >

                    <div className="card gallerygrid"> 
                        <img key={props.Id} className=" card-img"  src={props.ImageName} alt={props.ImageName}/>
                        <div className="card-img-overlay">
                            <h5 className="card-title  w-100 ">{Title}</h5>
                        </div>
                    </div>
            </div>
        </>
    )
}




export default WTPCard