import React, {useEffect, useState} from 'react'
import CheckoutButtonModal from '../../components/CheckOut/CheckoutButtonModal'
import fetchJSON from '../../utils/API'
import { useStoreContext } from "../../utils/GlobalStore"

function CheckoutPage(){
    const [,dispatch ]= useStoreContext()

    const [purchitems, setPurchItems] = useState([])
    const [totalCost, setTotalCost] = useState(0)
    const [showCktBttn, setCktBttn] = useState(false)

    async function getBasketList(){
        const {basketListItems, total}  = await fetchJSON('/api/basketList', 'get')
        setPurchItems(basketListItems)
        setTotalCost(total)
        console.log(`basket items ${basketListItems} and total cost ${total}`)

        if(total > 100){
            setCktBttn(true)
        }

        dispatch({ type: 'SHOPPING_BASKET', basketList:basketListItems, totalCost:total} )

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
                        {showCktBttn && <td><button type="button" class="btn btn-success btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal">Check Out: $ {totalCost/100}</button></td>}
                    </tr>
                </tbody>
            </table>
        </div>

        <CheckoutButtonModal />

        </>
    )
}

export default CheckoutPage