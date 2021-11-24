import React, { useState, useEffect } from 'react'
import { NavLink, useLocation  } from "react-router-dom"
import { useStoreContext } from "../../utils/GlobalStore"
import fetchJSON from '../../utils/API'
import NavLogin from './NavLogin'

import CheckoutBtn  from '../CheckOut/CheckoutButton'
import LogoSymbol from '../../components/Logo/Logo'
import './NavBar.css'
import CheckoutButtonModal from '../CheckOut/CheckoutButtonModal'
import BasktBtn from '../BasketBtn/BasketBtn'


let timeout

function NavBar(){

    const [{ authOk }, dispatch ]= useStoreContext()
    const [ showMenu, setShowMenu ] = useState( true )
    // adding const for menu toggle
   
    const location = useLocation()


  
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

    // console.log(location)
    
    useEffect( function(){
        async function loadUserSession(){
            const { status, userData, message }= await fetchJSON( `/api/users/session` )
          //   console.log( `[NavBar] attempted to reload session, result(${status}) message(${message})` )
            if( !status ){
              // clear any session
              dispatch({ type: 'USER_LOGOUT', message })
              return
            }
            dispatch({ type: 'USER_LOGIN', data: userData })
          }
      // on load let's  try to get the  session (if one exists)
      if( localStorage.session && !authOk ){
        loadUserSession()
      }
    }, [authOk, dispatch] )


    return (
        <>
            {(location.pathname!=='/HomePageAlternate' && location.pathname!=='/TestPage') &&
        
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarHeadings" aria-controls="navBarHeadings" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavLink to="/" className="navbar-brand nav-link" activeClassName="active"><LogoSymbol  /> </NavLink>
                        <div className="collapse navbar-collapse me-1 ms-5 " id="navBarHeadings">
                            <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/index" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCTS
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink to="/GalleryCollection"><li className="dropdown-item">Gallery Collection</li></NavLink>
                                        <NavLink to="/WallCoverings"><li className="dropdown-item">Wall Coverings</li></NavLink>
                                        <NavLink to="/WorldTravelPhotography"><li className="dropdown-item">World Travel Photography</li></NavLink>
                                        <NavLink to="/ArtandDesign"><li className="dropdown-item">Art & Design</li></NavLink>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/index" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SERVICES
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink to="/HospitalityandDesign"><li className="dropdown-item">Hospitality & Design</li></NavLink>
                                        <NavLink to="/Installations"><li className="dropdown-item">Installations</li></NavLink>
                                        <NavLink to="/Lighting"><li className="dropdown-item">Lighting</li></NavLink>
                                        <NavLink to="/TheFrameShop"><li className="dropdown-item">The Frame Shop</li></NavLink>
                                        <NavLink to="/PrintingandServices"><li className="dropdown-item">Printing & Services</li></NavLink>


                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/TheArtist" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        THE ARTIST
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink to="/TheArtist"><li className="dropdown-item">TheArtist</li></NavLink>
                                        <NavLink to="/Testimonials"><li className="dropdown-item">Testimonials</li></NavLink>
                                        <NavLink to="/Contact"><li className="dropdown-item">Contact</li></NavLink>

                                    </ul>
                                </li>
                                <NavLink to="/HomePageAlternate"><li className="nav-link">ALTERNATE HOMEPAGE</li></NavLink>
                                <NavLink to="/TestPage"><li className="nav-link">Test Page</li></NavLink>
                            </ul>
                          
                           
                        </div>
                        {/* <Payments /> */}
                        {/* <CheckoutBtn /> */}
                        <BasktBtn />
                        <NavLogin />
                    </div>
                

                </nav>



                
            }

            {(location.pathname!=='/HomePageAlternate' && location.pathname!=='/TestPage') &&
                <hr />
            }

            {/* <CheckoutButtonModal /> */}

        </>

    )
    
  
}




export default NavBar