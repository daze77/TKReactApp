import React from 'react' 

import NavBarLogo from '../../components/Logo/Logo'
import NavLogin from './NavLogin'

function NavBarAlt(){


    return(
        <>
            <nav id="navBarContainer">
                <div class="row navRow">
                    <div class="col-auto navbarBranding">
                        <NavBarLogo />
                    </div>
                    <div class="col menuItems">
                        <ul class="menuList ">
                            <li>PRODUCTS</li>
                            <li>SERVICES</li>
                            <li>THE ARTIST</li>


                        </ul>

                    </div>


                    <div class="col-auto">
                        <NavLogin />
                    </div>

                </div>
                
                


                





        
            
            </nav>
            
            <hr />
        </>
    )
}


export default NavBarAlt