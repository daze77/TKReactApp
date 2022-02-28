import React, {useState} from 'react'

import './UtilitiesPage.css'
import SubscriptionList from './SubscriptionList/SubscriptionList'
import AddressUpdates from './AddressUpdates/AddressUpdates'


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
            <div class="offcanvas-body sideMenu">
                <ul>
                    <li onClick={() => setPageDetails(<SubscriptionList/>)}>Subscription Page</li>
                    <li onClick={() => setPageDetails 
                    (<AddressUpdates/>)}>Address Updates</li>


                </ul>
            </div>
        </div>

            
        <div className="hambMenu">
            <div className="hambmenuitem" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" >
                <i class="fas fa-chevron-right fa-lg"></i>
                <i class="fas fa-chevron-right fa-lg"></i>
            </div>
        </div>
   

            <div>
                {pageDetails}
            </div>


        </div>










  
 
     




    
    
    
    </>
)

}

export default UtilitiesPage