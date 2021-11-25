import React, {useEffect, useState} from 'react'
import CheckoutButtonModal from '../../components/CheckOut/CheckoutButtonModal'
import fetchJSON from '../../utils/API'

function CheckoutPage(){
    const [purchitems, setPurchItems] = useState([])
    const [totalCost, setTotalCost] = useState(1)

    async function getBasketList(){
        const basketResults = await fetchJSON('/api/basketList', 'get')
        setPurchItems(basketResults)
        calculateTotalCost(basketResults)
    }


    function calculateTotalCost(basketItems){
        for (let i=0; i<basketItems.length; i++){
            setTotalCost( totalCost + (basketItems[i].quantity * basketItems[i].price))
        }
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
                        <td><button type="button" class="btn btn-success btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal">Check Out: $ {totalCost/100}</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <CheckoutButtonModal />

        </>
    )
}

export default CheckoutPage