import React, {useEffect, useState} from 'react'
import { useStoreContext } from "../../utils/GlobalStore"

import Row from '../../components/Row/Row'
import Card from '../../components/Card/Card'
import fetchJSON from '../../utils/API'


function People(props) {

    const [{basketCount, ...data } , dispatch]= useStoreContext()
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
        let basketLocalStorage = localStorage.TKBasket ? JSON.parse(localStorage.TKBasket) : [{"email": `${data.email}`}, {basket: []}]
        const [,{basket}] = basketLocalStorage
    
        if(basket.find(id => id.id === e.ID)){
            const existingItem = basket.find(id => id.id === e.ID)
            existingItem.quantity ++
            refreshCount()
        }else{
            basket.push(
                    {
                        "id": e.ID,
                        "title": e.Title,
                        "imageName": e.ImageName,
                        "url": URL.URL,
                        "page": URL.Page,
                        'quantity': 1,
                        'clickedItem':clickedItem
                    }
                )
            refreshCount()
    
        }
    
        function refreshCount(){
            let count = 0
            basket.forEach(item => {
                count = count + item.quantity
            })
            dispatch({type: "SHOPPING_BASKET_COUNT", basketCount: count})
    
        }
    
    
    
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
            // console.log('this is GAL', GALImages)
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




                        />

                    
                        ))


                    }

                </Row>

            </section>   
    </div>

         

    </>



)




}


export default People