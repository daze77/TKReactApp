import React, {useState} from 'react'

import './UtilitiesPage.css'
import SubscriptionList from './SubscriptionList/SubscriptionList'
import AddressUpdates from './AddressUpdates/AddressUpdates'


function UtilitiesPage(){
const [pageDetails, setPageDetails] = useState("")



return(
    <>
        <div className="container ">
            <div className="hambMenu">
                <div  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" >
                    <i className="fas fa-chevron-right fa-md "></i>
                    <i className="fas fa-chevron-right fa-md"></i>
                </div>
            </div>
    
            <div className="offcanvas offcanvas-start sideMenuOffcanvas" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Utilities</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body sideMenu">
                    <ul>
                        <li data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setPageDetails(<SubscriptionList/>)}>Subscription Page</li>
                        <li data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setPageDetails 
                        (<AddressUpdates/>)}>Address Updates</li>


                    </ul>
                </div>
            </div>

            <h1>Utilities Page</h1>
            <hr/>
            <div className="py-2">
                {pageDetails}
            </div>

        </div>    
    </>
)

}

export default UtilitiesPage