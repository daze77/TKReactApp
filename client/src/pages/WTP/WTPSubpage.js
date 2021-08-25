import React, { useState } from 'react'

import WTPCard from '../../components/WTPCard/WTPCard'
import WTPJSON  from '../../utils/wtp.json'

import './WTP.css'





function WTPSubpage(props){

    const clickedItem = props.location.state
    let itemJSON

    function getClickedItemDetails(){
        itemJSON = WTPJSON.filter(item => item.Title===clickedItem)
        console.log(itemJSON)
    }

    getClickedItemDetails()


    const clickedItemName = itemJSON[0].Title
    const clickedSubLink = itemJSON[0].SubLink
    console.log(clickedItemName)
    console.log(clickedSubLink)
  

    return(
        <>
        <div class="container">
            <section >
                <h1>{props.location.state}</h1>


                                


                <hr />

                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 wtpCollection">









                    {WTPJSON[0].SubLink.map( wtp =>(

                        <WTPCard 



                        Id = {wtp.Id}
                        Title = {wtp.Title}
                        ImageName = {URL + wtp.Image}
                        



                        />

                    



                    ))}

                </div>

            </section>   
        </div>
        </>
    )


}


export default WTPSubpage