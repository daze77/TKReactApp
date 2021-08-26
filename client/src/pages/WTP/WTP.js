import React from 'react'

import WTPCard from '../../components/WTPCard/WTPCard'
import WTPJSON  from '../../utils/wtp.json'

import './WTP.css'





function WTP(){

   const URL = 'https://www.tonykoukos.com/media/catalog/cache/'

  

    // function cardClicked(title){
    //      console.log("the image has been clicked")
    //      console.log(`${title}`)
    //      console.log(WTPJSON)
    //      const t = WTPJSON.filter(a => a.Title===title)
    //      setName(title)
    //      console.log(t)
    //      console.log(t[0].Id)
    //      console.log(t[0].Title)
      
    

     
    // }

  


    return(
        
        <>
      
        <div class="container">
            <section >
                <h1 >World Travel Photography </h1>
                <hr />

                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 wtpCollection">
                    {WTPJSON.map( wtp =>(

                        <WTPCard useRef={wtp.Title}

                        Id = {wtp.Id}
                        Title = {wtp.Title}
                        ImageName = {URL + wtp.Image}
                        Link = {wtp.Link}
                      
                        

                        />

                
                    ))}
                    
                </div>

            
            </section>   
        </div>
        </>
    )
}


export default WTP