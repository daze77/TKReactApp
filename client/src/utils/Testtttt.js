import React from 'react'
import { Route } from 'react-router-dom'
import Test from '../utils/wtp'
import WTPSubpage from '../pages/WTP/WTPSubpage' 
import Frank from './BrowserRoutes'


function Bill(props){
        console.log(props.match)

    return ( 
        <>
        {Test.map(a => (
           
            
            <Frank 
                Link={a.Link}
            />

         
        ))}
        </>
    )

}

export default Bill