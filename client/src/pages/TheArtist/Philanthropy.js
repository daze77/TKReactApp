import React from 'react'



import TonyPhoto04 from '../../assets/images/tkimages/tonykphoto04.jpg'
import TonyPhoto05 from '../../assets/images/tkimages/tonykphoto05.jpg'
import TonyPhoto06 from '../../assets/images/tkimages/tonykphoto06.jpg'




function Philanthropy(){




    return(
    <>
        <div class="container">
            <section>
                <h1>Philanthropy</h1> 
                <hr/>  
                <div class="clearfix">

                    <img src={TonyPhoto04} class="col-sm-12 col-md-4 float-md-end mb-3 ms-md-5" alt="..."/>
                    <img src={TonyPhoto05} class="col-sm-12 col-md-4 float-md-end mb-3 ms-md-5"alt="..."/>
                    <img src={TonyPhoto06} class="col-sm-12 col-md-4 float-md-end mb-3 ms-md-5"alt="..."/>


                    <div class="col-md-12">
                        <ul>
                            <li>Design for Hope, Partnered with Dusk to Dawn Interiors, Thunder Bay, August 4, 2011</li>
                            <li>Raised over $7000 for cancer research, donated to the Thunder Bay Regional Health Sciences Centre</li>
                            <li>Greek American Foundation Gabby Awards, New York City, June 2011</li>
                            <li>Donated more than 1000-signed prints for the gift bags of the raising funds to diaspora.</li>
                            <li>Has raised thousands of dollars, through donation of time and artwork auctions, for numerous organizations such as:</li>
                                <ul>
                                    <li>Canadian Cancer Society</li>
                                    <li>Canadian Mental Health Association</li>
                                    <li>AIDS Research</li>
                                    <li>Thunder Bay Community Auditorium</li>
                                    <li>Thunder Bay District Memorial Hospital</li>
                                    <li>Bachelor for Hope Auction</li>
                                    <li>Greek America Foundation 40 Under 40, Class 2012 recognition</li>
                                    <li>Photography appeared on a not-for-profit fundraising calendar distributed to over 300 corporations</li>
                                </ul>
                        </ul>
                    </div>
            </div>
            </section>
        </div>



   




    </>
    )


}


export default Philanthropy