import React, {  useState } from 'react' 
import { NavLink } from 'react-router-dom'

import NavBarLogo from '../../components/Logo/Logo'
import NavLogin from './NavLogin'
import LogoSymbol from '../../assets/logo/logosymbol.png'
import NavBarLogoSymbol from '../../components/Logo/Logo2Symbol'
let count =0

function NavBarAlt(){

    const [menuDropdown, setMenuDropdown] = useState("0px")
    const [subMenu1, setSubMenu1] = useState("")
    const [subMenu2, setSubMenu2] = useState("")
    const [subMenu3, setSubMenu3] = useState("")
    const [menuSelect, setMenuSelect] = useState('')

    function handleMenuDropdown(e){ 
        setMenuSelect(e.target.innerHTML)
  
        testMenuClick(e)
        handleSubMenu(e)
    }

    function handleCloseBtn(){
        console.log('btn clicked')
        count=0
        triggerMenuDropdown()

    }
   
    function testMenuClick(e){
        if(menuSelect===e.target.innerHTML && count===0){
            count=1
        }else if(menuSelect===e.target.innerHTML && count===1){
            count=0
        }else if(menuSelect!==e.target.innerHTML && count===1){
            count=1
        }else if(menuSelect!==e.target.innerHTML && count===0){
            count=1
        }


        triggerMenuDropdown()
    }
 
    function triggerMenuDropdown(){
        if(count===1 ){
            setMenuDropdown("100%")
        } 
        else setMenuDropdown('0px')
    }

    function handleSubMenu(e){
        if(e.target.innerHTML==="PRODUCTS"){
            setSubMenu1("block")
            setSubMenu2("none")
            setSubMenu3("none")
        }else if(e.target.innerHTML==="SERVICES"){
            setSubMenu1("none")
            setSubMenu2("block")
            setSubMenu3("none")
        }else{
            setSubMenu1("none")
            setSubMenu2("none")
            setSubMenu3("block")
        }
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
                    <div class="col navDropDowns subMenuWrapper" style={{height: menuDropdown}}>
                        <div class="subMenuOverlay">
                            <ul class="submenuHeader">
                                <li id="closebtn" onClick={handleCloseBtn}>&times;</li>
                                <li id="logoSubMenu"><img  src={LogoSymbol} alt="Logo"/>   </li>
                            </ul>

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

                </div>
                
            </nav>

            <hr />
        </>
    )
}


export default NavBarAlt