import React, {useEffect, useState} from 'react'
import { useStoreContext } from "../../utils/GlobalStore"

import Row from '../../components/Row/Row'
import Card from '../../components/Card/Card'
import fetchJSON from '../../utils/API'



function Classics(props) {

const [{ ...data } , dispatch]= useStoreContext()
 const clickedItem = props.location.state
 const [GALImages, setGALImages] = useState([])
 const [URL, setURL] = useState({})


 async function loadGALItems(){
    if(clickedItem){
        const {URL, SubLink} = await fetchJSON('/api/GALpull', 'post', {Title: clickedItem})
        SubLink.forEach(item => item.showPrice=false)
        setGALImages(SubLink)
        setURL({URL: URL, Page: "GalleryCollection"})

    }else{
        const hrefLINK = window.location.pathname.split(`/`)[2].toUpperCase()
        const {URL, SubLink} = await fetchJSON('/api/GALpull', 'post', {Title: hrefLINK})
        SubLink.forEach(item => item.showPrice=false)
        setGALImages(SubLink)
        setURL({URL: URL, Page: "GalleryCollection"})
    } 
 }

 function addToBasket(e){
        console.log(e)
    let basketLocalStorage = localStorage.TKBasket ? JSON.parse(localStorage.TKBasket) : [{"email": `${data.email}`}, {basket: []}]
    basketLocalStorage[1].basket.push(
        {
            "id": e.ID,
            "title": e.Title,
            "imageName": e.ImageName,
            "url": URL.URL,
            "page": URL.Page,
            'quantity': 1
        }
    )
    localStorage.TKBasket = JSON.stringify(basketLocalStorage)

    dispatch({type: "SHOPPING_BASKET", basketList: JSON.parse(localStorage.TKBasket)})
    }

    function showBuyBtn(e){
        const hoveredItem = GALImages.find((item) => item._id === e.ID)
        setGALImages([...GALImages], hoveredItem.showPrice=true)
    }

    function showPriceBtn(e){
        const hoveredItem = GALImages.find((item) => item._id === e.ID)
        setGALImages([...GALImages], hoveredItem.showPrice=false)
        console.log('this is GAL', GALImages)
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

                        className='card h-100 gallerygrid'
                        h5className='w-100'
                        cardbodyStyle='card-img-overlay'


                        key = {gcAS._id}
                        _id = {gcAS._id}
                        Title = {gcAS.Title}
                        ImageName = {URL.URL + gcAS.Image}
                        Price = {(gcAS.showPrice)?  "BUY" : "$ " + gcAS.Price/100}
                        AddToBasket = {addToBasket}
                        Link = {gcAS.Link}
                        ShowBuyBtn = {showBuyBtn}
                        ShowPriceBtn = {showPriceBtn}

                        ShowPrice = {gcAS.showPrice}



                        />

                    
                        ))


                    }

                </Row>

            </section>   
        </div>

            

        </>



)




}


export default Classics