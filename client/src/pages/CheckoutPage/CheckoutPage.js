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

    async function getBasketList(){
        const localStorageLS = (localStorage.TKBasket) ? JSON.parse(localStorage.TKBasket) : [{emai:data.email}, {basket:[]}]

        const {reply, totalCost} = await fetchJSON('/api/basketListPrice', 'post', localStorageLS)

        let count = 0
        localStorageLS[1].basket.forEach(item => {
            count = count + item.quantity
        })

        dispatch({type:'SHOPPING_BASKET_COUNT', basketCount:count})


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
        <div className="container utilitiesCard">
            <div className="utilitiesCard-header">
                <h1>Shopping Basket</h1>
            </div>
            <table className="table">
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
            </table>

            <div className="utilitiesCard-footer">
                <div className="text-end">
                    <span className="pe-3">Total</span>

                    {showCktBttn && <button type="button" className="btn btn-success btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal">Check Out: $ {totalCost}</button>}
                
                </div>
            </div>
        </div>

        {showCktBttn && <CheckoutButtonModal />}

        </>
    )
}

export default CheckoutPage