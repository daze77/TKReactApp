import React, {useEffect, useState} from 'react'

import CheckoutButtonModal from '../../components/CheckOut/CheckoutButtonModal'
import CheckoutPageHoverStatus from '../CheckoutPage/CheckoutPageHoverStatus'
import fetchJSON from '../../utils/API'
import { useStoreContext } from "../../utils/GlobalStore"
import './CheckoutPage.css'

function CheckoutPage(){
    const [{basketList, basketCount,  ...data},dispatch ]= useStoreContext()
    const [totalCost, setTotalCost] = useState(0)
    const [showCktBttn, setCktBttn] = useState(false)

    console.log(data)
    console.log(basketCount)


    async function getBasketList(){
        const localStorageLS = (localStorage.TKBasket) ? JSON.parse(localStorage.TKBasket) : [{emai:data.email}, {basket:[]}]
        console.log('localStorageLS', localStorageLS[1].basket.length)

        const {reply, totalCost} = await fetchJSON('/api/basketListPrice', 'post', localStorageLS)

        let count = 0
        localStorageLS[1].basket.forEach(item => {
            count = count + item.quantity
        })
        console.log(count)

        dispatch({type:'SHOPPING_BASKET_COUNT', basketCount:count})

        console.log('total cost', totalCost)

        if(localStorageLS[1].basket.length>0){
            setCktBttn(true)
            setTotalCost(totalCost)
        }else {
            setCktBttn(false)
        }
        
        dispatch({type: "SHOPPING_BASKET", basketList: [{emai:data.email}, {basket:reply}], totalCost: totalCost})
    }

    function handleDel(item){
        let localStorageLS = (localStorage.TKBasket) ? JSON.parse(localStorage.TKBasket) : [{emai:data.email}, {basket:[]}]

        let updatedBasketLst = localStorageLS[1].basket.filter((i, index) => item !== index )

        localStorageLS[1].basket=updatedBasketLst

        if(localStorageLS[1].basket.length>0){
                    localStorage.TKBasket = JSON.stringify(localStorageLS)
        } else {
            localStorage.removeItem('TKBasket')
        }



        getBasketList()        
    }


    useEffect(() => {
        getBasketList()

    },[])


    return(
        <>
        <div className="container">
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {basketList[1].basket.map((item, index) => (
                            <CheckoutPageHoverStatus

                                index = {index}
                                title = {item.title}
                                quantity = {item.quantity}
                                price = {item.price}
                                total = {item.total}
                                handleDel={handleDel}

                            />
                    ))} 
                   
                </tbody>
                <tbody>
                    <tr>
                        <th scope="row">Total</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        {showCktBttn && <td><button type="button" class="btn btn-success btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal">Check Out: $ {totalCost}</button></td>}
                    </tr>
                </tbody>
            </table>
        </div>

        {showCktBttn && <CheckoutButtonModal />}

        </>
    )
}

export default CheckoutPage