import React from 'react'

import Pub from "../../utils/Published.json"
import PubCard from '../../components/PublishedCard/PublishedCard'



function Published(){




    return(
    <>


        <div class="container">
            <section>
                <h1>Published</h1> 
                <hr/>  

                <div>
                    <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
                    {Pub.map(pub => (
                        <PubCard
                                Id={pub.Id}
                                Title={pub.Title}
                                Image={pub.Image}
                                ImageName={pub.ImageName}
                        
                        />

                        ))}
                    </div>
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


export default Published