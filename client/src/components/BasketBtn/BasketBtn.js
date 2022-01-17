import React from 'react'
import {Link} from 'react-router-dom'
import './BasketBtn.css'
import { useStoreContext } from '../../utils/GlobalStore'



function BasktBtn(){
    const [{ ...data } , ]= useStoreContext()

    const items = data.basketList[1].basket.length

    return(
        <>

            <Link to='/CheckoutPage'>
                <i class={`fas fa-shopping-bag ${items>0? `shopingBagwItems`:""}`}>
                    {items>0 &&<div class="basktItems ">
                        {items}
                    </div>}
                </i>
            </Link>

        </>
    )
}
export default BasktBtn