import React from 'react'



function ShowsTVFilm(){




    return(
    <>


        <div class="container">
            <section>
                <h1>Shows, Television and Film</h1> 
                <hr/>  

                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col">
                        {/* <img src={Pic1}/>
                        <img src={Pic2}/> */}

                    </div>
                    <div class="col">
                        {/* <img src={Pic3}/>
                        <img src={Pic4}/> */}
                    </div>
                    <div class="col">
                        {/* <img src={Pic5}/>
                        <img src={Pic6}/> */}

                    </div>

                    
                </div>
                <div>
                    <ul>
                        <li>Designer Guys</li>
                        <li>Whose Design is it Anyway</li>
                        <li>Restaurant Makeover</li>
                        <li>Paris Metro collection appeared on CTV's Flashpoint episode 405 titled “The Better Man,” aired 2011</li>
                        <li>Dubrovnik Nites used as props in a scene of Adam Sandler's “Grown-Ups”</li>
                        <li>Numerous art rentals for Toronto-based Hollywood productions</li>
                    </ul>
                </div>
            </section>
        </div>
    </>
    )

}


export default ShowsTVFilm