import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './BasketBtn.css'
import { useStoreContext } from '../../utils/GlobalStore'



function BasktBtn(){
    const [{ basketCount } , dispatch]= useStoreContext()


    useEffect(()=>{
        function basketLength(){

           const itemLength = (localStorage.TKBasket) ? JSON.parse(localStorage.TKBasket) : 0

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