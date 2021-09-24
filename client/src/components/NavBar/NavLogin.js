import React, { useState, useEffect } from 'react'
import { NavLink, useLocation  } from "react-router-dom"
import { useStoreContext } from "../../utils/GlobalStore"
import fetchJSON from '../../utils/API'
import './NavBar.css'


let timeout

function NavLogin(){

    const [{ authOk, name }, dispatch ]= useStoreContext()
    const [ showMenu, setShowMenu ] = useState( true )
    // adding const for menu toggle
   
    const location = useLocation()

    async function loadUserSession(){
      const { status, userData, message }= await fetchJSON( `/api/users/session` )
      // console.log( `[NavBar] attempted to reload session, result(${status}) message(${message})` )
      if( !status ){
        // clear any session
        dispatch({ type: 'USER_LOGOUT', message })
        return
      }
      dispatch({ type: 'USER_LOGIN', data: userData })
    }
  
    useEffect( function(){
      if( showMenu ){
        if( timeout ) clearTimeout( timeout )
        timeout = setTimeout( function(){ setShowMenu( false ); }, 2000 )
      }
    }, [ showMenu ])
  
    // location changed so hide menu
    useEffect( function(){
      if( timeout ) clearTimeout( timeout )
      setShowMenu( false )
    }, [ location ])
    
    useEffect( function(){
      // on load let's get try to get the  session (if one exists)
      if( localStorage.session && !authOk ){
        loadUserSession()
      }
    }, [] )

    return (
        <>

            
            <div className="d-flex ">
                <div className="mx-3">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        {name && <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Welcome back <u>{name}</u>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li className="nav-item"> <NavLink to="/Logout" className="nav-link" activeClassName="active">Logout</NavLink></li>
                                <li className="nav-item"> <NavLink to="/DatabaseUpdates" className="nav-link" activeClassName="active">Database Updates</NavLink></li>
                                <li className="nav-item"> <NavLink to="/UserProfile" className="nav-link" activeClassName="active">User Profile</NavLink></li>

                            </ul>
                        </li>}
                        {!name && <li className="nav-item "> <NavLink to="/Login" className="nav-link" activeClassName="active">Login</NavLink></li>}
                    </ul>
                </div>
            </div>


        </>

    )
    
  
}




export default NavLogin