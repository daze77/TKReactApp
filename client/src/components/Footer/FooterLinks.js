import React from 'react'
import {Link, Route} from 'react-router-dom'
import AddressCard from '../../components/Address/Address'





function FooterLinks(){

    return(
        <>
            
            <div class="row footerLists">
                <div class="col-lg-4 col-md-12 mb-4 mb-md-5">
                    <h3>Contact Us</h3>
                    <AddressCard />
                </div>
                <div class="col-lg-8 col-md-12 mb-4 mb-md-0">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <ul >
                                <Link to="/TheArtist"><li>The Artist</li></Link>
                                <Link to="/GalleryCollection"><li>Gallery Collection</li></Link>
                                <Link to="/WallCoverings"><li>Wall Coverings</li></Link>
                                <Link to="/WTP"><li>World Travel Photography</li></Link>
                                <Link to="ArtandDestination"><li>Art & Destination</li></Link>
                                <Link to="/Contact"><li>Contact Us</li></Link>
                                <Link to="/PrivacyPolicy"><li>Privacy Policy</li></Link>
                                <Link to="/Travelogue"><li>Travelogue</li></Link>


                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <ul>
                                <Link to="/TheArtist"><li>The Artist</li></Link>
                                <Link to="/GalleryCollection"><li>Gallery Collection</li></Link>
                                <Link to="/WallCoverings"><li>Wall Coverings</li></Link>
                                <Link to="/WTP"><li>World Travel Photography</li></Link>
                                <Link to="ArtandDestination"><li>Art & Destination</li></Link>
                                <Link to="/Contact"><li>Contact Us</li></Link>
                                <Link to="/PrivacyPolicy"><li>Privacy Policy</li></Link>

                            </ul>

                        </div>
                        <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <ul>
                                <Link to="/TheArtist"><li>The Artist</li></Link>
                                <Link to="/GalleryCollection"><li>Gallery Collection</li></Link>
                                <Link to="/WallCoverings"><li>Wall Coverings</li></Link>
                                <Link to="/WTP"><li>World Travel Photography</li></Link>
                                <Link to="ArtandDestination"><li>Art & Destination</li></Link>
                                <Link to="/Contact"><li>Contact Us</li></Link>
                                <Link to="/PrivacyPolicy"><li>Privacy Policy</li></Link>
                                <Link to="/Videos"><li>Videos</li></Link>

                            </ul>

                        </div>
                    </div>
                </div>


            </div>





        </>



    )
}


export default FooterLinks