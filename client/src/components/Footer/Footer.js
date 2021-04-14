import React from 'react'

import SubFooter from './SubFooter'
import './Footer.css'




function Footer(){


    return(
        <>
            <footer class="footercontainer">
                <div>
                    <div class="footerpart1">
                        <div class="footerpart1left"><p>Newsletter Subscription</p></div>
                        <div class="footerpart1right">
                            <ul class="social-icons icon-circle icon-rotate list-unstyled list-inline">
                                <li> <a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li> <a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li> <a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footerpart2">
                        <div class="btmcontainer">
                            <ul class="btmnav">
                                <li><a href="">Home</a> </li>
                                <li><a href="">The Artist</a> </li>
                                <li><a href="">Gallery Collection</a> </li>
                                <li><a href="">Wall Coverings</a> </li>
                                <li><a href="">World Travel Photography</a> </li>
                                <li><a href="">Art & Destination</a> </li>
                                <li><a href="">Sitemap</a> </li>
                                <li><a href="">Contact Us</a> </li>
                            </ul>
                        </div>

                    </div>
                </div>


                <SubFooter />

            </footer>


        </>



    )




}



export default Footer