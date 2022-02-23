import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './BasketBtn.css'
import { useStoreContext } from '../../utils/GlobalStore'



function BasktBtn(){
    const [{ basketCount } , dispatch]= useStoreContext()

        function basketLength(){
            const localStorageItems = (localStorage.TKBasket) ? JSON.parse(localStorage.TKBasket) : 0

            let count = 0
            localStorageItems[1].basket.forEach(item => {
                count = count + item.quantity
            })
            console.log(count)

          dispatch({type:'SHOPPING_BASKET_COUNT', basketCount:count})

        }
    useEffect(()=>{
        basketLength()

        // if(localStorage.TKBasket){
        //         basketLength()
        //     }
    },[])

    return(
        <>

            <Link to='/CheckoutPage'>
                <i class={`fas fa-shopping-bag ${basketCount>0? `shopingBagwItems`:""}`}>
                    {basketCount>0 &&<div class="basktItems ">
                        {basketCount}
                    </div>}
                </i>
            </Link>

        </>
    )
}
export default BasktBtn