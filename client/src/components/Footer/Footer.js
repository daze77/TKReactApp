import React from 'react'
import {Link} from 'react-router-dom'

import SubFooter from './SubFooter'
import './Footer.css'
import Subscriptions from './Subscriptions'




function Footer(){


    return(
        <>
            <footer class="footercontainer">
                <div>

                    <div class="footerpart2">
                        <div class="btmcontainer">
                            <ul class="btmnav">
                                <Link to="/PrivacyPolicy"><li>Privacy Policy</li></Link>
                                <Link to="/TheArtist"><li>The Artist</li></Link>
                                <Link to="/GalleryCollection"><li>Gallery Collection</li></Link>
                                <Link to="/WallCoverings"><li>Wall Coverings</li></Link>
                                <Link to="/WTP"><li>World Travel Photography</li></Link>
                                <Link to="ArtandDestination"><li>Art & Destination</li></Link>
                                <Link to="/Contact"><li>Contact Us</li></Link>
                                <Link to="/PrivacyPolicy"><li>Privacy Policys</li></Link>

                            </ul>
                        </div>

                    </div>
                </div>


                <SubFooter />
                <Subscriptions />

            </footer>


        </>



    )




}



export default Footer