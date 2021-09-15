import React, { useState } from 'react' 
import { NavLink } from 'react-router-dom'


import NavBarLogo from '../Logo/Logo'
import NavLogin from './NavLogin'
import LogoSymbol from '../../assets/logo/logosymbol.png'
// import NavBarLogoSymbol from '../Logo/Logo2Symbol'
import MenuBurger from '../MenuHamburger/MenuHamburger'

function NavBarAlt(){

    let minus = String.fromCharCode(45)
    const plus = String.fromCharCode(43)

    const mysubMenu1 = {
        display: "none",
    }
    const mysubMenu2 = {
        display: "none",
    }
    const mysubMenu3 = {
        display: "none",
    }

    // const [menuDropdown, setMenuDropdown] = useState("0px")
    const [subMenu1, setSubMenu1] = useState(mysubMenu1)
    const [subMenu2, setSubMenu2] = useState(mysubMenu2)
    const [subMenu3, setSubMenu3] = useState(mysubMenu3)
    // const [menuSelect, setMenuSelect] = useState('')
    const [navOveraly, setNavOverlay] = useState("0px")
    const [subMenuExpand1, setsubMenuExpand1] = useState (plus)
    const [subMenuExpand2, setsubMenuExpand2] = useState (plus)


    const [diamond1, setDiamond1] = useState(false)
    const [diamond2, setDiamond2] = useState(false)
    const [diamond3, setDiamond3] = useState(false)

    const [subMenuExpand3, setsubMenuExpand3] = useState (plus)




    // function for handling the main nav drop downs
    function handleSubMenu(e){
        switch(e){
            case "PRODUCTS":
                subMenu1.display === "block" ? setSubMenu1({display:"none"})  : setSubMenu1({display:"block", animation: "fadeMe 2s" });
                subMenu1.display === "block" ? setsubMenuExpand1(plus) : setsubMenuExpand1(minus);
                break;
            case "SERVICES":
                subMenu2.display === "block" ? setSubMenu2({display:"none"}) : setSubMenu2({display:"block", animation: "fadeMe 2s" });
                subMenu2.display === "block" ? setsubMenuExpand2(plus) : setsubMenuExpand2(minus);
                break;
            default:
                subMenu3.display === "block" ? setSubMenu3({display:"none"}) : setSubMenu3({display:"block", animation: "fadeMe 2s" });
                subMenu3.display === "block" ? setsubMenuExpand3(plus) : setsubMenuExpand3(minus);
        }
    }
    

    // function for handling the small screen nav overlay


    function handleNavOverlay(){
        setNavOverlay("100%")
    }

    function handleCloseButton(){
        setNavOverlay("0%")
    }

    function handleMainMenu(e){
        if(e === "PRODUCTS"){
            diamond1? setDiamond1(false) : setDiamond1(true) 
            setDiamond2(false)
            setDiamond3(false)
        }else if(e === "SERVICES"){
            setDiamond1(false)
            diamond2? setDiamond2(false) : setDiamond2(true) 
            setDiamond3(false)
        }else{
            setDiamond1(false)
            setDiamond2(false)
            diamond3? setDiamond3(false) : setDiamond3(true) 
        }
    }


    return(
        <>
            <nav className="container">
                <div className="row navRow">
                    <div className="col-auto navbarBranding">
                        {/* <div id="logoSymbolOnly" >
                            <NavBarLogoSymbol onClick={handleNavOverlay}/>
                        </div> */}
                        <div id="logoFull" >
                            <NavBarLogo onClick={handleNavOverlay} />
                        </div>
                    </div>
                    <div className="col menuList" >
                        <ul className=" ">
                            <li  onClick={() => handleMainMenu('PRODUCTS')}>PRODUCTS
                                <span className={`ddiamond ${!diamond1 ? "displayNoneStyle":"displayBlockStyle"}`}>
                                    <span className={`mainNavOverlay `}>
                                        <ul >
                                            <NavLink to="/GalleryCollection"><li className="">Gallery Collection</li></NavLink>
                                            <NavLink to="/WallCoverings"><li className="">Wall Coverings</li></NavLink>
                                            <NavLink to="/WorldTravelPhotography"><li className="">World Travel Photography</li></NavLink>
                                            <NavLink to="/ArtandDesign"><li className="">Art & Design</li></NavLink>
                                        </ul>
                                    </span>
                                </span>
                            </li>
                            <li onClick={() => handleMainMenu('SERVICES')}>SERVICES
                                <span className={`ddiamond ${!diamond2? "displayNoneStyle":"displayBlockStyle"}` }>
                                    <span className={`mainNavOverlay `}>
                                        <ul>
                                                <NavLink to="/HospitalityandDesign"><li className="">Hospitality & Design</li></NavLink>
                                                <NavLink to="/Installations"><li className="m">Installations</li></NavLink>
                                                <NavLink to="/Lighting"><li className="">Lighting</li></NavLink>
                                                <NavLink to="/TheFrameShop"><li className="">The Frame Shop</li></NavLink>
                                                <NavLink to="/PrintingandServices"><li className="">Printing & Services</li></NavLink>
                                        </ul>
                                    </span>
                                </span> 
                            </li>
                            <li onClick={() => handleMainMenu('THE ARTIST')}>THE ARTIST
                                <span className={`ddiamond ${!diamond3? "displayNoneStyle":"displayBlockStyle"}`}>
                                    <span className={`mainNavOverlay `}>
                                    <ul >
                                        <NavLink to="/TheArtist"><li className="">The Artist</li></NavLink>
                                        <NavLink to="/Testimonials"><li className="">Testimonials</li></NavLink>
                                        <NavLink to="/Contact"><li className="">Contact</li></NavLink>
                                    </ul>
                                    </span>
                                </span> 
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <NavLogin />
                    </div>
                    <MenuBurger onClick={handleNavOverlay}/>

                    
                </div>
                <div className=" navOverlay" style={{height: navOveraly}}>
                    <div className="navOverlayWrapper container">
                        {/* <div className="navOverlayHeader" > */}
                            <ul className="navOverlaySubMenu">
                                <li id="closeButton" onClick={handleCloseButton}>&times;</li>
                                <li id="subMenuLogo"><img src={LogoSymbol} alt="Logo"/>   </li>
                            </ul>
                        {/* </div> */}
                        <div className="fullMenuList ">
                            <div  id="PRODUCTS" onClick={() => handleSubMenu('PRODUCTS')}>PRODUCTS &#32; {subMenuExpand1} 
                                <ul className="sub-menuList" style={subMenu1}>
                                    <NavLink to="/GalleryCollection"><li className="">Gallery Collection</li></NavLink>
                                    <NavLink to="/WallCoverings"><li className="">Wall Coverings</li></NavLink>
                                    <NavLink to="/WorldTravelPhotography"><li className="">World Travel Photography</li></NavLink>
                                    <NavLink to="/ArtandDesign"><li className="">Art & Design</li></NavLink>
                                </ul>
                            </div>
                            <div  id="SERVICES" onClick={() => handleSubMenu ('SERVICES')}>SERVICES &#32; {subMenuExpand2}
                                <ul className="sub-menuList"  style={subMenu2}>
                                    <NavLink to="/HospitalityandDesign"><li className="">Hospitality & Design</li></NavLink>
                                    <NavLink to="/Installations"><li className="m">Installations</li></NavLink>
                                    <NavLink to="/Lighting"><li className="">Lighting</li></NavLink>
                                    <NavLink to="/TheFrameShop"><li className="">The Frame Shop</li></NavLink>
                                    <NavLink to="/PrintingandServices"><li className="">Printing & Services</li></NavLink>
                                </ul>
                            </div>
                            <div  id="THEARTIST" onClick={() => handleSubMenu('THE ARTIST')}>THE ARTIST &#32; {subMenuExpand3}
                                <ul className="sub-menuList" style={subMenu3}>
                                    <NavLink to="/TheArtist"><li className="">The Artist</li></NavLink>
                                    <NavLink to="/Testimonials"><li className="">Testimonials</li></NavLink>
                                    <NavLink to="/Contact"><li className="">Contact</li></NavLink>
                                </ul>
                        
                            </div>
                        </div> 
                    </div>               
                </div>
            </nav>
            <hr />
        </>
    )
}


export default NavBarAlt