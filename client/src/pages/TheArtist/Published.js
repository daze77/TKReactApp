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
                        <li>Notable mention in The Goddess of the Hunt, June 12, 2011</li>
                        <li>Listed in Seductively French</li>
                        <li><a href="https://yyzliving.wordpress.com/2011/11/29/one-of-a-kind-christmas-show-and-sale/" alt="YYZ article" target="_blank" rel="noreferrer">YYZ Living magazine notable mention from the One of a Kind Show, 2011</a></li>
                        <li>Thunder Bay Chronicle Journal</li>
                        <li>Published by three international art publishers, one from each; Canada, United States, and England</li>
                        <li><a href="https://houseandhome.com/decorating-design/the-artist-project/" alt="House and Home - The Artist Project Article" target="_blank" rel="noreferrer">Featured on House & Home</a></li>
                        <li><a href="https://houseandhome.com/video/2010-princess-margaret-showhome-second-floor/" alt="House and HOme The Princess Margaret Showhome 2010 Article" target="_blank" rel="noreferrer">Artwork for Princess Margaret Show home was donated by Tony Koukos.</a></li>
                        <li>Feature in Gifts & Tablewares magazine, a look at what was "in" in home décor at the CGTA Fall Gift Show, Sept 2007</li>






                        




                    </ul>
                </div>
            </section>
        </div>
    </>
    )

}


export default Published