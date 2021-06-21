import React, {  useState } from 'react' 
import { NavLink } from 'react-router-dom'

import NavBarLogo from '../Logo/Logo'
import NavLogin from './NavLogin'
import LogoSymbol from '../../assets/logo/logosymbol.png'
import NavBarLogoSymbol from '../Logo/Logo2Symbol'
let count =0

function NavBarAlt(){

    const [menuDropdown, setMenuDropdown] = useState("0px")
    const [subMenu1, setSubMenu1] = useState("block")
    const [subMenu2, setSubMenu2] = useState("block")
    const [subMenu3, setSubMenu3] = useState("block")
    const [menuSelect, setMenuSelect] = useState('')
    const [navOveraly, setNavOverlay] = useState("0px")

    function handleNavOverlay(){
        console.log(`symbol clicked`)
        setNavOverlay("100%")
    }

    function handleCloseButton(){
        setNavOverlay("0%")
    }

    function handleSubMenu(e){
        console.log(e.target.firstChild.data
            )

        switch(e.target.firstChild.data){
            case "PRODUCTS":
                subMenu1 === "block"? setSubMenu1("none") : setSubMenu1("block");
                break;
            case "SERVICES":
                subMenu2 === "block"? setSubMenu2("none") : setSubMenu2("block");
                break;
            default:
                subMenu3 === "block"? setSubMenu3("none") : setSubMenu3("block");

        }
     }


    


    console.log(navOveraly)

    return(
        <>
            <nav>
                <div class="row navRow">
                    <div class="col-auto navbarBranding">
                        <div onClick={handleNavOverlay}>
                            <NavBarLogoSymbol />

                        </div>
                    </div>
                    <div class="col menuItems">
                        {/* <ul class="menuList ">
                            <li onClick={handleSubMenu}>PRODUCTS</li>
                            <li onClick={handleSubMenu}>SERVICES</li>
                            <li onClick={handleSubMenu}>THE ARTIST</li>
                        </ul> */}
                    </div>
                    <div class="col-auto">
                        <NavLogin />
                    </div>
                </div>
                <div class="navOverlay" style={{height: navOveraly}}>
                    <div class="navOverlayContent" >
                        <ul class="navOverlaySubMenu">
                            <li id="closeButton" onClick={handleCloseButton}>&times;</li>
                            <li id="subMenuLogo"><img  src={LogoSymbol} alt="Logo"/>   </li>
                        </ul>
                    </div>
                    <div class="fullMenuList ">
                        <ul >
                            <li onClick={handleSubMenu}>PRODUCTS
                                <ul class="sub-menuList" style={{display: subMenu1}}>
                                    <NavLink to="/GalleryCollection"><li class="">Gallery Collection</li></NavLink>
                                    <NavLink to="/WallCoverings"><li class="">Wall Coverings</li></NavLink>
                                    <NavLink to="/WorldTravelPhotography"><li class="">World Travel Photography</li></NavLink>
                                    <NavLink to="/ArtandDesign"><li class="">Art & Design</li></NavLink>
                                </ul>
                            
                            </li>



                            <li onClick={handleSubMenu}>SERVICES
                                <ul class="sub-menuList"  style={{display: subMenu2}}>
                                    <NavLink to="/HospitalityandDesign"><li class="">Hospitality & Design</li></NavLink>
                                    <NavLink to="/Installations"><li class="m">Installations</li></NavLink>
                                    <NavLink to="/Lighting"><li class="">Lighting</li></NavLink>
                                    <NavLink to="/TheFrameShop"><li class="">The Frame Shop</li></NavLink>
                                    <NavLink to="/PrintingandServices"><li class="">Printing & Services</li></NavLink>
                                </ul>
                            </li>
                            <li onClick={handleSubMenu}>THE ARTIST
                                <ul class="sub-menuList" style={{display: subMenu3}}>
                                    <NavLink to="/TheArtist"><li class="">The Artist</li></NavLink>
                                    <NavLink to="/Testimonials"><li class="">Testimonials</li></NavLink>
                                    <NavLink to="/Contact"><li class="">Contact</li></NavLink>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>


      
            
            <hr />
        </>
    )
}


export default NavBarAlt