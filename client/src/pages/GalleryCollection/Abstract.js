import React, {useEffect, useState} from 'react'
import { useStoreContext } from "../../utils/GlobalStore"

import Row from '../../components/Row/Row'
import Card from '../../components/Card/Card'
// import GalleryCard from '../../components/GalleryCard/GalleryCard'
import fetchJSON from '../../utils/API'
// import { application } from 'express'


function Abstract(props) {
    const [{ ...data }, dispatch ]= useStoreContext()

    console.log('hey we getting this', data.email)
 const clickedItem = props.location.state
 console.log(props)
 const [GALImages, setGALImages] = useState([])
 const [URL, setURL] = useState()



 async function loadGALItems(){
    if(clickedItem){
        const {URL, SubLink} = await fetchJSON('/api/GALpull', 'post', {Title: clickedItem})
        setGALImages(SubLink)
        setURL(URL)

    }else{
        const hrefLINK = window.location.pathname.split(`/`)[2].toUpperCase()
        const {URL, SubLink} = await fetchJSON('/api/GALpull', 'post', {Title: hrefLINK})
        setGALImages(SubLink)
        setURL(URL)
    } 
 }

 function addToBasket(e){
    console.log('this is e.  Button Clicked!!', e)
    let basketLocalStorage = localStorage.TKBasket ? JSON.parse(localStorage.TKBasket) : [{"email": `${data.email}`}, {basket: []}]

    console.log('this is from LS', basketLocalStorage)

    basketLocalStorage[1].basket.push(
        {
            "id": e.ID,
            "title": e.Title,
            "imageName": e.ImageName,
            "url": URL
        }
    )

    console.log(basketLocalStorage)

    localStorage.TKBasket = JSON.stringify(basketLocalStorage)

 }


useEffect(() => {
    loadGALItems()
},[])

return(
    <>
    <div className="container">
        <section >
            <h1>{clickedItem}</h1>
            <hr />

            <Row rowclass="row-cols-1 row-cols-md-3 g-3 wtpCollection "
                classstyle = "wtpCollection gallerySubMenus">
         
                {GALImages.map( gcAS => (
                    <Card 

                        // classstyle="wtp"
                        className='card h-100 gallerygrid'
                        h5className='w-100'
                        cardbodyStyle='card-img-overlay'


                        key = {gcAS._id}
                        _id = {gcAS._id}
                        Title = {gcAS.Title}
                        ImageName = {URL + gcAS.Image}
                        Price = {gcAS.Price}
                        AddToBasket = {addToBasket}
                    />
                ))}

            </Row>
        </section>   
    </div>
  
  
    </>
)
}


export default Abstract