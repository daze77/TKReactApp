import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './BasketBtn.css'
import { useStoreContext } from '../../utils/GlobalStore'
import fetchJSON from '../../utils/API'



function BasktBtn(){
    const [{ basketList, basketCount, ...data } , dispatch]= useStoreContext()
    console.log('these are the items', basketList)
    console.log('these are the items', data)
    console.log('these are the items', data)

    useEffect(()=>{
        function basketLength(){

           const itemLength = (localStorage.TKBasket) ? JSON.parse(localStorage.TKBasket) : 0
            console.log(itemLength[1].basket.length)

           dispatch({type:'SHOPPING_BASKET_COUNT', basketCount:itemLength[1].basket.length})

        }
        if(localStorage.TKBasket){
                basketLength()
            }
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