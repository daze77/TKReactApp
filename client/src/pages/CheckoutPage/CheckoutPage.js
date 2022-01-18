import React, {useEffect, useState} from 'react'

import CheckoutButtonModal from '../../components/CheckOut/CheckoutButtonModal'
import fetchJSON from '../../utils/API'
import { useStoreContext } from "../../utils/GlobalStore"
import './CheckoutPage.css'

function CheckoutPage(){
    const [{basketList,  ...data},dispatch ]= useStoreContext()
    const [totalCost, setTotalCost] = useState(0)
    const [showCktBttn, setCktBttn] = useState(false)

    async function getBasketList(){
        const localStorageLS = (localStorage.TKBasket) ? JSON.parse(localStorage.TKBasket) : [{emai:data.email}, {basket:[]}]
        console.log('hahahhaa', localStorageLS)

        const {reply, totalCost} = await fetchJSON('/api/basketListPrice', 'post', localStorageLS)

        if(localStorage.TKBasket){
            setCktBttn(true)
            setTotalCost(totalCost)
        }
        dispatch({type: "SHOPPING_BASKET", basketList: [{emai:data.email}, {basket:reply}], totalCost: totalCost})
        dispatch({type: "SHOPPING_BASKET_COUNT", basketCount: localStorageLS[1].basket.length})
    }

    async function handleDel(item){
        console.log('button clicked')
        let localStorageLS = (localStorage.TKBasket) ? JSON.parse(localStorage.TKBasket) : [{emai:data.email}, {basket:[]}]

        let updatedBasketLst = localStorageLS[1].basket.filter((i, index)=> item !== index )

        localStorageLS[1].basket=updatedBasketLst

        localStorage.TKBasket = JSON.stringify(localStorageLS)

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
                        
                        <tr>
                            
                            <th scope="row"  >{index+1}</th>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>$ {item.price/100}</td>
                            <td>$ {item.total/100} <i class="fas fa-minus" onClick={()=>handleDel(index)}></i></td>
                        </tr>
                    ))}
                </tbody>
                <tbody>
                    <tr>
                        <th scope="row">Total</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        {showCktBttn && <td><button type="button" class="btn btn-success btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal">Check Out: $ {totalCost/100}</button></td>}
                    </tr>
                </tbody>
            </table>




            {/* <div>Static Data</div>
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
                    {purchitems.map(item => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.itemName}</td>
                            <td>{item.quantity}</td>
                            <td>$ {item.price/100}</td>
                            <td>$ {(item.price * item.quantity)/100}</td>
                        </tr>
                    ))}
                </tbody>
                <tbody>
                    <tr>
                        <th scope="row">Total</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        {showCktBttn && <td><button type="button" class="btn btn-success btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal">Check Out: $ {totalCost/100}</button></td>}
                    </tr>
                </tbody>
            </table> */}
        </div>

        {showCktBttn && <CheckoutButtonModal />}

        </>
    )
}

export default CheckoutPage