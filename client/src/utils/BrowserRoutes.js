import React from 'react'
import { Route } from 'react-router-dom'



function SubPageRoutes(props){
    return ( 
        <>
            <Route exact path={`/${props.Link}`} component={props.SubPage} /> 
        </>
    )
}

export default SubPageRoutes