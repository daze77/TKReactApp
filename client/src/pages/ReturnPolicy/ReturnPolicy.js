import React from 'react'
import {Link} from 'react-router-dom'

import './ReturnPolicy.css'



function ReturnPolicy(){




    return(
    <>
        <div className="container returnpolicy">
            <h1>Return Policy</h1>
            <hr />

            <p>Our goal at <Link to="/"><strong>WWW.TONYKOUKOS.COM</strong></Link> is to ensure complete satisfaction with your purchase. If your order did not meet expectations, you may exchange it within 5 business days of receiving your custom art. Once your return has been received and inspected, a credit for the cost of the purchase price, less shipping, will be issued and must be used within 90 days. Shipping charges are non-refundable. The client is also responsible for any return shipping costs, as well as any applicable charges, duty or brokerage fees, unless the error occurred in processing.</p>

 

            <p>Please note, art pieces are fragile and measures must be taken to ensure that the returned product is received by <Link to="/"><strong>WWW.TONYKOUKOS.COM</strong></Link> in the exact condition it was originally shipped.</p>

 

            <p>Kindly use all original packaging material and boxes for the return. Also note, all orders are custom and created on demand to fulfill each order individually. If the item is not received in perfect condition and cannot be returned to inventory, <Link to="/"><strong>WWW.TONYKOUKOS.COM</strong></Link> reserves the right to discount the value, or to charge a re-stocking fee of 50%, less shipping.</p>

 

            <p>Claims for damaged goods, missing items, or discrepancies must be made within two business days of receiving your finished product. To make a claim, please contact sales@tonykoukos.com.</p>

 

            <p>Check with your shipper to ensure all returns have sufficient insurance to avoid any possible damaged-in-transit losses. The client is responsible for all returns until it has been received and signed off by staff at <Link to="/">www.tonykoukos.com</Link>.</p>

 

            <p>Please inform our staff prior to shipping any goods back and we will share the shipping address with you. You can email                     <span><a href="mailto:tony@tonykoukos.com"><strong> sales@tonykoukos.com</strong></a></span> for further information.</p>

 

            <p>PLEASE RECYCLE THE PACKAGING MATERIAL FROM YOUR GOODS ONCE YOU HAVE INSPECTED YOUR ORDER AND EVERYTHING IS SATISFACTORY.</p>


        </div>

    </>
    )


}


export default ReturnPolicy