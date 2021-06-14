import React, { useState, useEffect } from 'react'
import { NavLink, useLocation  } from "react-router-dom"
import { useStoreContext } from "../../utils/GlobalStore"
import fetchJSON from '../../utils/API'
import logo from '../../assets/logo/logo.png'
import NavLogin from './NavLogin'


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

    console.log(location)
    
    useEffect( function(){
      // on load let's  try to get the  session (if one exists)
      if( localStorage.session && !authOk ){
        loadUserSession()
      }
    }, [] )


    return (
        <>
            {location.pathname!=='/HomePageAlternate' &&
        
                <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <NavLink to="/" class="navbar-brand" className="nav-link" activeClassName="active"><img src={logo} alt=""  /> </NavLink>
                        <div class="collapse navbar-collapse me-1 ms-5" id="navbarTogglerDemo02">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCTS
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink to="/GalleryCollection"><li class="dropdown-item">Gallery Collection</li></NavLink>
                                        <NavLink to="/WallCoverings"><li class="dropdown-item">Wall Coverings</li></NavLink>
                                        <NavLink to="/WorldTravelPhotography"><li class="dropdown-item">World Travel Photography</li></NavLink>
                                        <NavLink to="/ArtandDesign"><li class="dropdown-item">Art & Design</li></NavLink>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SERVICES
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink to="/HospitalityandDesign"><li class="dropdown-item">Hospitality & Design</li></NavLink>
                                        <NavLink to="/Installations"><li class="dropdown-item">Installations</li></NavLink>
                                        <NavLink to="/Lighting"><li class="dropdown-item">Lighting</li></NavLink>
                                        <NavLink to="/TheFrameShop"><li class="dropdown-item">The Frame Shop</li></NavLink>
                                        <NavLink to="/PrintingandServices"><li class="dropdown-item">Printing & Services</li></NavLink>


                                    </ul>
                                </li>



                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/TheArtist" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        THE ARTIST
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink to="/TheArtist"><li class="dropdown-item">TheArtist</li></NavLink>
                                        <NavLink to="/Testimonials"><li class="dropdown-item">Testimonials</li></NavLink>
                                        <NavLink to="/Contact"><li class="dropdown-item">Contact</li></NavLink>

                                    </ul>
                                </li>
                                <NavLink to="/HomePageAlternate"><li class="nav-link">ALTERNATE HOMEPAGE</li></NavLink>


                            </ul>
                            <NavLogin />
                            <br/>
                        </div>
                    </div>
                

                </nav>
            }

            {location.pathname!=='/HomePageAlternate' &&
                <hr />
            }

            


            
        </>

    )
    
  
}




export default NavBar