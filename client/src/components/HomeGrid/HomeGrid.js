import React from 'react'

import HomeGridImgs from './HomeGridImgs'

import HomeGridJSON from '../../utils/HomeGrid.json'

import './HomeGrid.css'







function HomeGrid(){




    return(
        <>
                    <div class="gridpadding row row-cols-1 row-cols-md-4 g-4 mb-5">
                    {HomeGridJSON.map(hgrid => (
                        <HomeGridImgs
                                Id={hgrid.Id}
                                Title={hgrid.Title}
                                Image={hgrid.Image}
                                ImageName={hgrid.ImageName}
                        
                        />

                        ))}
                    </div>

        </>



    )
}


export default HomeGrid