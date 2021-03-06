import React from 'react'
import {Link} from 'react-router-dom'
import AddressCard from '../Address/Address'





function FooterLinks(){




    return(
        <>
            <div className="row footerLists">
                <div className="col-lg-4 col-md-12 mb-4 mb-md-5">
                    <h5>Contact Us</h5>
                    <AddressCard />
                    <br />
                    <span><a href="tel:+1-416-305-5430"><i className="fas fa-phone"></i> 416.305.5430</a></span><br />
                    <span><a href="mailto:tony@tonykoukos.com"><i className="far fa-envelope"></i> tony@tonykoukos.com</a></span>
                </div>
                <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <ul >
                                <Link to="/GalleryCollection"><li>Gallery Collection</li></Link>
                                <Link to="/WallCoverings"><li>Wall Coverings</li></Link>
                                <Link to="/WorldTravelPhotography"><li>World Travel Photography</li></Link>
                                <Link to="ArtandDesign"><li>Art & Design</li></Link>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <ul>
                                <Link to="/TheArtist"><li>The Artist</li></Link>
                                <Link to="/Travelogue"><li>Travelogue</li></Link>
                                <Link to="/Travel-Tips"><li>Travel Tips</li></Link>
                                <Link to="/Videos"><li>Videos</li></Link>
                            </ul>

                        </div>
                        <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
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