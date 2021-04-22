import React from 'react'

import './Footer.css'

import SubFooter from './SubFooter'
import FooterLinks from './FooterLinks'
import Subscriptions from './Subscriptions'
import Social from '../Social/Social'




function Footer(){


    return(
        <>
            <footer>
                <hr />
                <div class="container">
                    <FooterLinks />
                </div>
                {/* <Social /> */}

                <Subscriptions />
                <SubFooter />

                


            </footer>


        </>



    )




}



export default Footer