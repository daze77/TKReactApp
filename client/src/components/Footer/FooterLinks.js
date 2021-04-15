import React from 'react'
import {Link} from 'react-router-dom'



function FooterLinks(){

    return(
        <>
            
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col">
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
                <div class="col">
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
                <div class="col">
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


            </div>

        </>



    )
}


export default FooterLinks