import React, {useState} from 'react'
import { Route } from 'react-router-dom'
import Test from '../utils/wtp'
import WTPSubpage from '../pages/WTP/WTPSubpage' 



function WTRoutes(props){

    // console.log('[[PROPS]]', `/WTP/${props.Link}`)

    return ( 
        <>

  
            <Route exact path={`/WTP/${props.Link}`} component={WTPSubpage} /> 

        
        </>
    )
}

export default WTRoutes