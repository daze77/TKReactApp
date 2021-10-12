import React, {useState, useEffect} from 'react'

import Row from '../../components/Row/Row'
import Card from '../../components/Card/Card'
import fetchJSON from '../../utils/API'

import './WTP.css'





function WTPSubpage(props){

    const URL = 'https://www.tonykoukos.com/media/catalog/product/cache/1/thumbnail/314x299/9df78eab33525d08d6e5fb8d27136e95/'
    const clickedItem = props.location.state

    const [WTPImages, setMyWTPImages] = useState([])

    async function loadWTPImages(){
        if(clickedItem){
            const {SubLink} = await fetchJSON('/api/wtpJSONpull', 'post', {Title: clickedItem})
            setWTPImages(SubLink)
        }else{
            const hrefLINK = window.location.pathname.split(`/`)[2]
            const {SubLink} = await fetchJSON('/api/wtpJSONpull', 'post', {Title: hrefLINK})
            setWTPImages(SubLink)
        }            
    }

    function setWTPImages(WTPResults){
        setMyWTPImages(WTPResults)
    }

    useEffect(function(){
        loadWTPImages()
    }, [])

    //
        // const clickedItemName = itemJSON[0].Title
        // const clickedSubLink = itemJSON[0].SubLink
        // console.log(clickedItemName)
        // console.log(clickedSubLink)
            // let aaaaaa = []

            // function createJSON(){
            //     for (var i=1; i<31; i++){
            //         let str = "" + i
            //         let pad = "000"
            //         let ans = pad.substring(0, pad.length - str.length) + str
            //         let b = {
            //                 "Id": Number(`1.${i}`),
            //                 "Title": `vrn${ans}c-a`,
            //                 "Image": `v/r/vrn${ans}c-a.jpg`,
            //                 "ImageName": `vrn${ans}c-a`,
            //                 "Link": "",
                            

            //                 }
            //                 aaaaaa.push(b)
    
            //         }
            //         console.log(aaaaaa)
            // }

            // createJSON()





    return(
        <>
        <div className="container">
            <section >
                <h1>{clickedItem}</h1>
                <hr />
                <Row rowclass='row-cols-1 row-cols-md-3'
                    classstyle='g-3 wtpCollection'>
                    {WTPImages.map( wtp =>(
                        <Card 
                            classstyle="wtp"
                            className='card gallerygrid'
                            h5className='w-100'
                            cardbodyStyle='card-img-overlay'
                            
                            key={wtp._id}
                            Id = {wtp.Id}
                            Title = {wtp.Title.toUpperCase()}
                            ImageName = {URL + wtp.Image}
                        />
                    ))}
                </Row>
            </section>   
        </div>
        </>
    )
}

export default WTPSubpage