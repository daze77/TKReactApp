import React from 'react'

import './HomepageAlternate.css'

import logo from '../../assets/logo/logo.png'



function showMenu(){
    document.querySelector('.covermainnav').style.display ="block"
}


function HomePageAlt(){

  


    return (

        <>
        <div id="coverpage" onClick = {showMenu}>

            
            <section className="coverheader">
                <div className="sitelogo">

                    
                    <a href="index.html">
                        <img src={logo} alt="imgage"/>
                    </a>
                </div>
                <div className="social">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/tony_koukos_photography/" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/Tony-Koukos-World-Travel-Photography-124767567540376/" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/tonykoukos?lang=en" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCv7TQcF44zhITM02Lldao9A" target="_blank" rel="noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>    
                        </li>
                        <li>
                            <i className="fab fa-linkedin-in"></i>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="covercontentbody">
                <div className ="covermainnav" >
                <p>Products</p>
                <ul>
                    <li> <a href="gallery-collection.html">Gallery Collection</a>
                    </li>
                    <li> <a href="wall-coverings.html">Wall Coverings</a>

                    </li>
                    <li> <a href="world-travel-photography.html">World Travel Photography</a>
                    </li>
                    <li> <a href="art-design.html">Art & Design</a>
                    </li>
                </ul>
                <p>Services</p>
                    <ul>                     
                        <li> <a href="hospitality-design.html"> Hospitality & Design</a>
                        </li>
                        <li> <a href="installations.html">Installations</a>
                        </li>
                        <li><a href="lighting.html">Lighting</a>
                        </li>
                        <li><a href="the-frame-shop.html">The Frame Shop</a>
                        </li>
                        <li> <a href="printing-services.html">Printing & Services</a>
                        </li>
                        <li> <a href="testimonials.html">Testimonials</a>
                        </li>
                        <li> <a href="contact-about.html">Contact/About</a>
                        </li>
                    </ul>
             </div>
            </section>
           

        </div>

        </>
    )



}




export default HomePageAlt