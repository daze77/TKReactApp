import React from 'react'

import AddressCard from '../../components/Address/Address'
import './Contact.css'



function Contact(){




    return(
    <>

        <div className="container">
            <section >
                <h1>Contact Us</h1>
                <hr />

                <div className="container">
                    <h6>TONY KOUKOS</h6>
                    <AddressCard />
                    <br />

                    <span><i className="fas fa-phone-alt"></i><a href="tel:+1-416-305-5430">  416.305.5430</a></span><br />
                    <span><i className="fas fa-envelope"></i><a href="mailto:tony@tonykoukos.com">  tony@tonykoukos.com</a></span>

                </div>

               
            </section>
        </div>


    </>
    )


}


export default Contact