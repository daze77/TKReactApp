import React from 'react'

import HomeGridImgs from './HomeGridImgs'
import HomeGridJSON from '../../utils/HomeGrid.json'

import Row from '../Row/Row'


import './HomeGrid.css'


function HomeGrid(){
    return(
        <>
        <Row rowclass = {`row-cols-2 row-cols-md-4 g-4 mb-5 gridpadding`}>
        
            {HomeGridJSON.map(hgrid => (

                <HomeGridImgs
                        Key={hgrid.Id}
                        Id={hgrid.Id}
                        Title={hgrid.Title}
                        Image={hgrid.Image}
                        ImageName={hgrid.ImageName}
                        Link={hgrid.Link}

                
                />
            ))}
        </Row>

        </>
    )
}

export default HomeGrid