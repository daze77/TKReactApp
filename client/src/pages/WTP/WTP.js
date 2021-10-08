import React, {useEffect, useState} from 'react'

import GalleryCard from '../../components/GalleryCard/GalleryCard'
import fetchJSON from '../../utils/API'
// import WTPJSON  from '../../utils/wtp.json'

import './WTP.css'

function WTP(){

    const [WTPImages, setMyWTPImages] = useState([])
    const URL = 'https://www.tonykoukos.com/media/catalog/cache/'

    async function loadWTPImages(){
        const WTPResults = await fetchJSON('/api/wtpJSONpull')
        setWTPImages(WTPResults)
    }

    function setWTPImages(WTPResults){
        setMyWTPImages(WTPResults)
        // console.log(WTPResults)
    }

    useEffect(function(){
        loadWTPImages()
    }, [])
  
    return(
        <>
        <div className="container">
            <section >
                <h1 >World Travel Photography </h1>
                <hr />

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 wtpCollection">
                    {WTPImages.map( wtp =>(

                        <GalleryCard 
                        key={wtp._id}
                        _id = {wtp._id}
                        Title = {wtp.Title}
                        ImageName = {URL + wtp.Image}
                        Link = {wtp.Link}
                        />
                    ))}
                </div>
            </section>   
        </div>
        </>
    )
}

export default WTP