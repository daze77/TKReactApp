import React from 'react' 

import MenuBurger from "../components/MenuHamburger/MenuHamburger"

import './pages.css'


// import NavBarAlt from '../components/NavBar/NavBarAlternate'
import NavBarAlt2 from '../components/NavBar/NavBarAlternate2'

function TestPage(){



    return(
        <>
        {/* <NavBarAlt /> */}
        <NavBarAlt2 />
        <div>This is a Test Page</div>

        <MenuBurger />


        </>
    )
}


export default TestPage