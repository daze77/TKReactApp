import React, { useState } from 'react' 
import { NavLink } from 'react-router-dom'

import NavBarLogo from '../../components/Logo/Logo'
import NavLogin from './NavLogin'

function NavBarAlt(){

    const [menuDropdown, setMenuDropdown] = useState("0px")
    const [subMenu1, setSubMenu1] = useState("")
    const [subMenu2, setSubMenu2] = useState("")

    const [subMenu3, setSubMenu3] = useState("")

    


    function handleMenuDropdown(){ 
        console.log(`menu button pushed`)     
        menuDropdown==="500px"? setMenuDropdown('0px'): setMenuDropdown('500px')
    }

    function handleSubMenu(e){
        console.log(`submenu activated`, e)
        subMenu1==="none"? setSubMenu1("block"):setSubMenu1("none")
        subMenu2==="none"? setSubMenu2("block"):setSubMenu2("none")
        subMenu3==="none"? setSubMenu3("block"):setSubMenu3("none")

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
                            <li onClick={() =>
                                {
                                    handleMenuDropdown();
                                    handleSubMenu();
                                
                                }}
                                >PRODUCTS</li>
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
                        <ul class="sub-menu" style={{display: subMenu1}}>
                            <NavLink to="/GalleryCollection"><li class="">Gallery Collection</li></NavLink>
                            <NavLink to="/WallCoverings"><li class="">Wall Coverings</li></NavLink>
                            <NavLink to="/WorldTravelPhotography"><li class="">World Travel Photography</li></NavLink>
                            <NavLink to="/ArtandDesign"><li class="">Art & Design</li></NavLink>
                        </ul>
                        <ul class="sub-menu"  style={{display: subMenu2}}>
                            <NavLink to="/HospitalityandDesign"><li class="">Hospitality & Design</li></NavLink>
                            <NavLink to="/Installations"><li class="m">Installations</li></NavLink>
                            <NavLink to="/Lighting"><li class="">Lighting</li></NavLink>
                            <NavLink to="/TheFrameShop"><li class="">The Frame Shop</li></NavLink>
                            <NavLink to="/PrintingandServices"><li class="">Printing & Services</li></NavLink>
                        </ul>
                        <ul class="sub-menu" style={{display: subMenu3}}>
                            <NavLink to="/TheArtist"><li class="">The Artist</li></NavLink>
                            <NavLink to="/Testimonials"><li class="">Testimonials</li></NavLink>
                            <NavLink to="/Contact"><li class="">Contact</li></NavLink>
                        </ul>

                    </div>

                </div>
                
                


                





        
            
            </nav>
            
            <hr />
        </>
    )
}


export default NavBarAlt