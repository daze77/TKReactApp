import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './BasketBtn.css'
import { useStoreContext } from '../../utils/GlobalStore'



function BasktBtn(){
    const [{ basketCount } , dispatch]= useStoreContext()

        function basketLength(){
            const localStorageItems = (localStorage.TKBasket) ? JSON.parse(localStorage.TKBasket) : []

            let count = 0
            if(localStorageItems.length === 0){
                count = 0
            }else{
                localStorageItems[1].basket.forEach(item => {
                count = count + item.quantity
            })
            }
            
          dispatch({type:'SHOPPING_BASKET_COUNT', basketCount:count})

        }
    useEffect(()=>{
        basketLength()
    },[])

    return(
        <>

            <Link to='/CheckoutPage'>
                <i className={`fas fa-shopping-bag ${basketCount>0? `shopingBagwItems`:""}`}>
                    {basketCount>0 &&<div className="basktItems ">
                        {basketCount}
                    </div>}
                </i>
            </Link>

        </>
    )
}
export default BasktBtn