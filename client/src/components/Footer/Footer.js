import React from 'react'
import { useLocation  } from "react-router-dom"


import './Footer.css'

import SubFooter from './SubFooter'
import FooterLinks from './FooterLinks'
import Subscriptions from './Subscriptions'




function Footer(){


    const location = useLocation()

    return(
        <>
        {location.pathname!=='/HomePageAlternate' &&
            <footer>
                <hr />
                <div class="container">
                    <FooterLinks />
                </div>

                <Subscriptions />
                <SubFooter />
            </footer>
        }
        </>
    )
}



export default Footer