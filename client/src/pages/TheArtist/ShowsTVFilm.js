import React from 'react'

import Row from '../../components/Row/Row'
import Card from '../../components/Card/Card'
import Media from '../../utils/ShowsTVFilm.json'


import Tonykphoto07 from '../../assets/images/media/tonykphoto07.jpg'
import Tonykphoto08 from '../../assets/images/media/tonykphoto08.jpg'
import Tonykphoto09 from '../../assets/images/media/tonykphoto09.jpg'
import Tonykphoto11 from '../../assets/images/media/tonykphoto11.jpg'
import Tonykphoto12 from '../../assets/images/media/tonykphoto12.jpg'
import Tonykphoto13 from '../../assets/images/media/shows-television-film1.jpg'


function ShowsTVFilm(){
  
    let mediaObj = {
        "Tonykphoto07": Tonykphoto07,
        "Tonykphoto08": Tonykphoto08,
        "Tonykphoto09": Tonykphoto09,
        "Tonykphoto11": Tonykphoto11,
        "Tonykphoto12": Tonykphoto12,
        "Tonykphoto13": Tonykphoto13
    }




    return(
    <>


        <div className="container">
            <section>
                <h1>Shows, Television and Film</h1> 
                <hr/>  

                <Row rowclass = 'row-cols-1 row-cols-md-2 g-4 mb-5'>
                   {Media.map(media => (
                       <Card
                            className = 'card h-100 mb-1'
                            idName = 'cardformat'
                            _id={media._id}
                            Title={media.Title}
                            Text={media.Text}
                            Image={media.Image}
                            ImageName={mediaObj[media.ImageName]}
                           
                    
                       />

                   ))}
                </Row>


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