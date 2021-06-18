import React, { useState } from 'react' 

import NavBarLogo from '../../components/Logo/Logo'
import NavLogin from './NavLogin'

function NavBarAlt(){

    const [menuDropdown, setMenuDropdown] = useState("0px")
    


    function handleMenuDropdown(){

        console.log(`menu button pushed`)
        
        menuDropdown==="100px"? setMenuDropdown('0px'): setMenuDropdown('100px')
        
      


    }


    return(
        <>
            <nav id="navBarContainer">
                <div class="row navRow">
                    <div class="col-auto navbarBranding">
                        <NavBarLogo />
                    </div>
                    <div class="col menuItems">
                        <ul class="menuList ">
                            <li onClick={handleMenuDropdown}>PRODUCTS</li>
                            <li onClick={handleMenuDropdown}>SERVICES</li>
                            <li onClick={handleMenuDropdown}>THE ARTIST</li>
                        </ul>
                    </div>
                    <div class="col-auto">
                        <NavLogin />
                    </div>
                </div>
                <div class="row navDropDownRow">
                    <div class="col navDropDowns" style={{height: menuDropdown}}>

                    </div>

                </div>
                
                


                





        
            
            </nav>
            
            <hr />
        </>
    )
}


export default NavBarAlt