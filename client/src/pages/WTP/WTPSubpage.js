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





        let aaaaaa = []

        function createJSON(){
            for (var i=1; i<31; i++){
                let str = "" + i
                let pad = "000"
                let ans = pad.substring(0, pad.length - str.length) + str
                let b = {
                        "Id": Number(`1.${i}`),
                        "Title": `flo${ans}c-a`,
                        "Image": `f/l/flo${ans}c-a.jpg`,
                        "ImageName": `flo${ans}c-a`,
                        "Link": "",
                        

                        }
                        aaaaaa.push(b)

                        
                }
                console.log(aaaaaa)
        }

        createJSON()



        URL = 'https://www.tonykoukos.com/media/catalog/product/cache/1/thumbnail/314x299/9df78eab33525d08d6e5fb8d27136e95/'















  

    return(
        <>
        <div class="container">
            <section >
                <h1>{props.location.state}</h1>


                                


                <hr />

                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 wtpCollection">









                    {itemJSON[0].SubLink.map( wtp =>(

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