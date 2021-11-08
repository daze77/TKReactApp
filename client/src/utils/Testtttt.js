import React from 'react'
import Test from '../utils/wtp'
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