import React from 'react'
import {Link} from 'react-router-dom'
import AddressCard from '../../components/Address/Address'





function FooterLinks(){

    return(
        <>
            <div class="row footerLists">
                <div class="col-lg-4 col-md-12 mb-4 mb-md-5">
                    <h5>Contact Us</h5>
                    <AddressCard />
                    <br />
                    <span><a href="tel:+1-416-305-5430"><i class="fas fa-phone"></i> 416.305.5430</a></span><br />
                    <span><a href="mailto:tony@tonykoukos.com"><i class="far fa-envelope"></i> tony@tonykoukos.com</a></span>
                </div>
                <div class="col-lg-8 col-md-12 mb-4 mb-md-0">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <ul >
                                <Link to="/GalleryCollection"><li>Gallery Collection</li></Link>
                                <Link to="/WallCoverings"><li>Wall Coverings</li></Link>
                                <Link to="/WorldTravelPhotography"><li>World Travel Photography</li></Link>
                                <Link to="ArtandDestination"><li>Art & Destination</li></Link>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <ul>
                                <Link to="/TheArtist"><li>The Artist</li></Link>
                                <Link to="/Travelogue"><li>Travelogue</li></Link>
                                <Link to="/Travel-Tips"><li>Travel Tips</li></Link>
                                <Link to="/Videos"><li>Videos</li></Link>
                            </ul>

                        </div>
                        <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <ul>
                                <Link to="/Contact"><li>Contact Us</li></Link>
                                <Link to="/PrivacyPolicy"><li>Privacy Policy</li></Link>
                                <Link to="/ReturnPolicy"><li>Return Policy</li></Link>
                                <Link to="/CustomerService"><li>Customer Service</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterLinks