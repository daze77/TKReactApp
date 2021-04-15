import React from 'react'

import './Footer.css'

import SubFooter from './SubFooter'
import FooterLinks from './FooterLinks'
import Subscriptions from './Subscriptions'




function Footer(){


    return(
        <>
            <footer>
                <div class="container">
                    <FooterLinks />
                </div>

                <Subscriptions />
                <SubFooter />


            </footer>


        </>



    )




}



export default Footer