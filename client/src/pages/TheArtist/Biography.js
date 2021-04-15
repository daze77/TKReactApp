import React from 'react'
import tonykphoto from '../../assets/tkimages/tonykphoto.jpg'



function Biography(){




    return(
    <>


        <div class="container">
            <section>
                <h1>Biography</h1> 
                <hr/>  
                <div class="clearfix">
                    <img src={tonykphoto} class="col-sm-12 col-md-4 float-md-end mb-3 ms-md-5" alt="..."/>

                    <p>
                        Tony Koukos, photographer, has found inspiration throughout the world. Currently residing Canada, it is not uncommon for 
                        him to board a jet plane at the last minute to complete a project or embark on a new adventure. Whether it’s climbing 
                        the medieval towers of Tuscany or scuba-diving the Great Barrier Reef, he does whatever it takes to find a distinctive angle, 
                        that perfect shot. His pictures speak for themselves, each a piece of art, conveying a message of history, character and natural beauty.
                    </p>
                    <p>
                        After obtaining a University degree in business, Tony was in the financial services industry for 7 years. In May of 2004, he decided to make a change. 
                        Resigning from his position, he decided to become a photographer. Having no experience or education in the art and design industry, his passion for travel, 
                        photography and design surpassed the fear of failure.
                    </p>
                    <p>
                        His obsession to keep moving forward in life, has brought him to approximately 45 countries including; Italy, Cuba, Australia, Thailand, Morocco, Japan, 
                        Turkey, Croatia, Brazil, Argentina and many more. He regularly ventures off on a photo shoot to one of the many corners of the world, seeking new subject matter 
                        to create his newest collection. He faithfully returns to Greece each year, where his roots lie, to capture the shadows cast on the whitewashed villas of the 
                        sun-drenched Greek Isles. The future of this world travel photographer brings him on adventures to Africa and India, where we anticipate his new images that 
                        will surely captivate us.
                    </p>   
                </div>
                <br />
                <div>
                    <h3>ARTIST STATEMENT</h3>
                    <blockquote class="statementbody">
                        As a photographer, I love to capture the details of our beautiful planet…. the little things that everyday people walk by and don’t take the time to appreciate.   
                        Beauty can be found everywhere, from crackled wood textures in the Cycladic Islands of Greece, to the shimmering ocean in Miami and ornate architectural details 
                        of Paris. Just stop and scan your surroundings to find it. Each time I board a plane to embark on a new journey, I am always excited to see what the world is 
                        presenting to my lens.
                            <p style={{textAlign: "right", fontSize: "80%"}}>Tony Koukos</p>
                    </blockquote>
                </div>

            </section>
        </div>



    </>
    )


}


export default Biography