import React from 'react'

import Row from '../../components/Row/Row'
import Pub from "../../utils/Published.json"
import Card from '../../components/Card/Card'


import Tonykphoto12_1 from '../../assets/images/published/tonykphoto12_1.jpg'
import Tonykphoto13 from '../../assets/images/published/tonykphoto13.jpg'
import Tonykphoto14 from '../../assets/images/published/tonykphoto14.jpg'
import Tonykphoto15 from '../../assets/images/published/tonykphoto15.jpg'
import Tonykphoto16 from '../../assets/images/published/tonykphoto16.jpg'
import Tonykphoto17 from '../../assets/images/published/tonykphoto17.jpg'
import Tonykphoto18 from '../../assets/images/published/tonykphoto18.jpg'
import Tonykphoto19 from '../../assets/images/published/tonykphoto19.jpg'



function Published(){

    let pubObj = {
        "Tonykphoto12_1": Tonykphoto12_1,
        "Tonykphoto13": Tonykphoto13,
        "Tonykphoto14": Tonykphoto14,
        "Tonykphoto15": Tonykphoto15,
        "Tonykphoto16": Tonykphoto16,
        "Tonykphoto17": Tonykphoto17,
        "Tonykphoto18": Tonykphoto18,
        "Tonykphoto19": Tonykphoto19
    }


    return(
    <>


        <div className="container">
            <section>
                <h1>Published</h1> 
                <hr/>  

                <div>
                    <Row rowclass = 'row-cols-1 row-cols-md-2 g-4 mb-5'>
                    {Pub.map(pub => (
                        <Card
                                className = 'card h-100 mb-1'
                                idName = 'pubcardformat'
                                Id={pub.Id}
                                Title={pub.Title}
                                Image={pub.Image}
                                ImageName={pubObj[pub.ImageName]}
                        
                        />

                        ))}
                    </Row>
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