import React, {useEffect, useState} from 'react'
import CheckoutButtonModal from '../../components/CheckOut/CheckoutButtonModal'

function CheckoutPage(){

    const testBasket=[
        {
            "id": 1,
            "itemName":"Test1",
            "price": 2399,
            "quantity": 2,
        },
        {
            "id": 2,
            "itemName":"Test2",
            "price": 2599,
            "quantity": 1,
        },
        {
            "id": 3,
            "itemName":"Test3",
            "price": 23699,
            "quantity": 1,
        },
        {
            "id": 4,
            "itemName":"Test4",
            "price": 238899,
            "quantity": 1,
        }
    ]
    const [purchitems, setPurchItems] = useState(testBasket)
    const [totalCost, setTotalCost] = useState(0)


    function calculateTotalCost(){
        let total = 0

        for (let i=0; i<purchitems.length; i++){
            total = ( total + (purchitems[i].quantity * purchitems[i].price))
        }
        setTotalCost(total)
    }

    useEffect(() => {
        calculateTotalCost()
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