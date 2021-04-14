import React, { useState, useEffect } from 'react'
import { Redirect, NavLink, useLocation  } from "react-router-dom"
import { useStoreContext } from "../../utils/GlobalStore"
import fetchJSON from '../../utils/API'
import logo from '../../assets/logo/logo.png'


let timeout

function NavBar(){

    const [{ authOk, name }, dispatch ]= useStoreContext()
    const [ showMenu, setShowMenu ] = useState( true )
    // adding const for menu toggle
   
    const location = useLocation()

    async function loadUserSession(){
      const { status, userData, message }= await fetchJSON( `/api/users/session` )
      console.log( `[NavBar] attempted to reload session, result(${status}) message(${message})` )
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <NavLink to="/" class="navbar-brand" className="nav-link" activeClassName="active"><img src={logo} alt=""  />   <strong>   </strong></NavLink>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PRODUCTS
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li class="dropdown-item"><NavLink to="/GalleryCollection">Gallery Collection</NavLink></li>
                                    <li class="dropdown-item"><NavLink to="/WallCoverings">Wall Coverings</NavLink></li>
                                    <li class="dropdown-item"><NavLink to="/WTP">World Travel Photography</NavLink></li>
                                    <li class="dropdown-item"><NavLink to="/ArtandDesign">Art & Design</NavLink></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SERVICES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li class="dropdown-item"><NavLink to="/HospitalityandDesign">Hospitality & Design</NavLink></li>
                                    <li class="dropdown-item"><NavLink to="/Installation">Installations</NavLink></li>
                                    <li class="dropdown-item"><NavLink to="/Lighting">Lighting</NavLink></li>
                                    <li class="dropdown-item"><NavLink to="/TheFrameShop">The Frame Shop</NavLink></li>
                                    <li class="dropdown-item"><NavLink to="/PrintingandServices">Printing & Services</NavLink></li>
                                    <li class="dropdown-item"><NavLink to="/Testimonials">Testimonials</NavLink></li>
                                    <li class="dropdown-item"><NavLink to="/TheArtist">TheArtist</NavLink></li>
                                    <li class="dropdown-item"><NavLink to="/Contact">Contact</NavLink></li>

                                </ul>
                            </li>

                            {!name && <li class="nav-item"> <NavLink to="/Login" className="nav-link" activeClassName="active">Login</NavLink></li>}

                        </ul>
                        {name && 
                            <div class="d-flex">
                                <div class="mx-3">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" id="navbarScrollingDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Welcome back <u>{name}</u>
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                                <li class="nav-item"> <NavLink to="/Logout" className="nav-link" activeClassName="active">Logout</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                        <br/>
                    </div>
                </div>
            </nav>


        </>

    )
    
  
}




export default NavBar