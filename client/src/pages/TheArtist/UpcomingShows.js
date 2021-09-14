import React from 'react'

import Tonykphoto02 from '../../assets/images/tkimages/tonykphoto02.jpg'



function UpcomingShows(){




    return(
    <>


        <div className="container">
            <section>
                <h3>SHOWS</h3>
                <br />
                <div className="clearfix">
                    <img src={Tonykphoto02} className="col-sm-12 col-md-4 float-md-end mb-3 ms-md-5" alt="..."/>
                    <p><strong>UPCOMING</strong></p>
                    <ul>
                        <li>IDS Toronto Interior Design Show, January 23-26, 2014</li>
                        <li>The Artist Project Toronto, February 20-23, 2014</li>
                        <li>Tony is always looking for new shows to exhibit at.  If you have a recommendation of where you'd like to see him next, please email us at info@tonykoukos.com.</li>
                    </ul>
                    <p><strong>PAST</strong></p>
                    <ul>
                        <li>IIDEX/NEOCON Canada, Toronto, Sept 20-21, 2012</li>
                        <li>Greek Film & Foto Week, Toronto, May 5-15, 2012</li>
                        <li>Artist Project, Toronto, March 1-4, 2012</li>
                        <li>Interior Design Show, Toronto, January 26-29, 2012</li>
                        <li>One of a Kind Show, Toronto, November 24-28, 2011</li>
                        <li>Greek Foto Week, The Burroughes Gallery, Toronto, May 1-7, 2011</li>
                        <li>Toronto Art Expo, Toronto, April 14-17, 2011</li>
                        <li>One of a Kind Show, Toronto, Nov 25-Dec 5, 2010</li>
                        <li>One of a Kind Show, Toronto, Nov 26-Dec 6, 2009</li>
                        <li>Interior Design Show, Toronto, January 24-27, 2013</li>
                        <li>Artist Project, Toronto, Feb 21-24, 2013</li>
                        <li>Greek Film & Foto Week, Toronto, May 11-18, 2013</li>

                    </ul>
                </div>





                



            </section>
        </div>



    </>
    )


}


export default UpcomingShows