import React, {useState, useEffect} from 'react'
import ArtandDesignCard from '../../components/GalleryCard/GalleryCard'
import './ArtandDesign.css'
import fetchJSON from '../../utils/API'

// let aaaaaa = []

    // function createJSON(){
    //     for (var i=100; i<350; i++){
    //         let b = {
    //                 "Id": Number(`${i}`),
    //                 "Title": `ad0${i}c-c`,
    //                 "Image": `ad0${i}c-c.jpg`,
    //                 "ImageName": `ad0${i}c-c`,
    //                 "Link": "",

    //                 }
    //                 aaaaaa.push(b)

                    
    //         }
    //         console.log(aaaaaa)
    // }

    // createJSON()

function ArtandDesign(){
    const [ANDResults, setANDResults] = useState([])
    
    const URL = 'https://www.tonykoukos.com/media/catalog/product/cache/1/thumbnail/314x299/9df78eab33525d08d6e5fb8d27136e95/a/d/'

    async function loadANDImages(){
        const DBANDResults = await fetchJSON('/api/andJSONpull')
        setANDResults(DBANDResults)
    }

    useEffect(() => {
        loadANDImages()
    },[])

    return(
        <>
        <div className="container">
            <section >
                <h1>Art and Design</h1>
                <hr />

                <div className="row row-cols-1 row-cols-md-3 g-3  artDesignCollection">
                    {ANDResults.map( ad =>(

                        <ArtandDesignCard 

                        Id = {ad.Id}
                        Title = {ad.Title}
                        ImageName = {URL + ad.Image}

                        />
                    ))}
                </div>
            </section>   
        </div>
        </>
    )
}

export default ArtandDesign