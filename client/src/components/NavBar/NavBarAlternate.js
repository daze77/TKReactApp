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
                <div className="row navRow">
                    <div className="col-auto navbarBranding">
                        <NavBarLogo />
                    </div>
                    <div className="col menuItems">
                        <ul className="menuList ">
                            <li onClick={handleMenuDropdown}>PRODUCTS</li>
                            <li onClick={handleMenuDropdown}>SERVICES</li>
                            <li onClick={handleMenuDropdown}>THE ARTIST</li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <NavLogin />
                    </div>
                </div>
                <div className="row navDropDownRow">
                    <div className="col navDropDowns subMenuWrapper" style={{height: menuDropdown}}>
                        <div className="subMenuOverlay">
                            <ul className="submenuHeader">
                                <li id="closebtn" onClick={handleCloseBtn}>&times;</li>
                                <li id="logoSubMenu"><img  src={LogoSymbol} alt="Logo"/>   </li>
                            </ul>

                            <ul className="sub-menu" style={{display: subMenu1}}>
                                <NavLink to="/GalleryCollection"><li className="">Gallery Collection</li></NavLink>
                                <NavLink to="/WallCoverings"><li className="">Wall Coverings</li></NavLink>
                                <NavLink to="/WorldTravelPhotography"><li className="">World Travel Photography</li></NavLink>
                                <NavLink to="/ArtandDesign"><li className="">Art & Design</li></NavLink>
                            </ul>
                            <ul className="sub-menu"  style={{display: subMenu2}}>
                                <NavLink to="/HospitalityandDesign"><li className="">Hospitality & Design</li></NavLink>
                                <NavLink to="/Installations"><li className="m">Installations</li></NavLink>
                                <NavLink to="/Lighting"><li className="">Lighting</li></NavLink>
                                <NavLink to="/TheFrameShop"><li className="">The Frame Shop</li></NavLink>
                                <NavLink to="/PrintingandServices"><li className="">Printing & Services</li></NavLink>
                            </ul>
                            <ul className="sub-menu" style={{display: subMenu3}}>
                                <NavLink to="/TheArtist"><li className="">The Artist</li></NavLink>
                                <NavLink to="/Testimonials"><li className="">Testimonials</li></NavLink>
                                <NavLink to="/Contact"><li className="">Contact</li></NavLink>
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