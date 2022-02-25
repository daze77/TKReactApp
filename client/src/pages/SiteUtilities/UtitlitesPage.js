import React, {useState} from 'react'

import './UtilitiesPage.css'
import SubscriptionList from './SubscriptionList/SubscriptionList'


function UtilitiesPage(){
const [pageDetails, setPageDetails] = useState("")



return(
    <>
    <div className="utilitiesPage">

        



    
        <h1>Utilities Page</h1>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Utilities</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul>
                    <li onClick={() => setPageDetails(<SubscriptionList/>)}>Subscription Page</li>
                    <li>Subscription Page</li>
                    <li>Subscription Page</li>
                    <li>Subscription Page</li>
                    <li>Subscription Page</li>
                    <li>Subscription Page</li>
                    <li>Subscription Page</li>
                    <li>Subscription Page</li>
                    <li>Subscription Page</li>
                    <li>Subscription Page</li>

                </ul>
            </div>
        </div>

            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button> 

            <div>
                {pageDetails}
            </div>


        </div>










  
 
     




    
    
    
    </>
)

}

export default UtilitiesPage