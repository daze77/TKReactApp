import React, {  useState } from 'react' 
import { NavLink } from 'react-router-dom'


import NavBarLogo from '../Logo/Logo'
import NavLogin from './NavLogin'
import LogoSymbol from '../../assets/logo/logosymbol.png'
import NavBarLogoSymbol from '../Logo/Logo2Symbol'
let count =0

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




    const [menuDropdown, setMenuDropdown] = useState("0px")
    const [subMenu1, setSubMenu1] = useState(mysubMenu1)
    const [subMenu2, setSubMenu2] = useState(mysubMenu2)
    const [subMenu3, setSubMenu3] = useState(mysubMenu3)
    const [menuSelect, setMenuSelect] = useState('')
    const [navOveraly, setNavOverlay] = useState("0px")
    const [subMenuExpand1, setsubMenuExpand1] = useState (plus)
    const [subMenuExpand2, setsubMenuExpand2] = useState (plus)

    const [subMenuExpand3, setsubMenuExpand3] = useState (plus)

    console.log(subMenu1)
    console.log(subMenu1.display)



    function handleNavOverlay(){
        console.log(`symbol clicked`)
        setNavOverlay("100%")
    }

    function handleCloseButton(){
        setNavOverlay("0%")
    }

    function handleSubMenu(e){
        console.log(`this is e`, e)
        switch(e.target.id){
            case "PRODUCTS":
                subMenu1.display === "block" ? setSubMenu1({display:"none"})  : setSubMenu1({display:"block", animation: "fadeMe 2s" })
                break;
            case "SERVICES":
                subMenu2.display === "block" ? setSubMenu2({display:"none"}) : setSubMenu2({display:"block", animation: "fadeMe 2s" });
                break;
            default:
                subMenu3.display === "block" ? setSubMenu3({display:"none"}) : setSubMenu3({display:"block", animation: "fadeMe 2s" });

        }
        test(e)
     }

     function test(e){
        console.log(`this is e`, e)
        switch(e.target.id){
            case "PRODUCTS":
                subMenu1.display === "block" ? setsubMenuExpand1(plus) : setsubMenuExpand1(minus);
                break;
            case "SERVICES":
                subMenu2.display === "block" ? setsubMenuExpand2(plus) : setsubMenuExpand2(minus);
                break;
            default:
                subMenu3.display === "block" ? setsubMenuExpand3(plus) : setsubMenuExpand3(minus);

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
                    <div class="col " style={{display: "none"}}>
                        <ul class=" ">
                            <li onClick={handleSubMenu}>PRODUCTS</li>
                            <li onClick={handleSubMenu}>SERVICES</li>
                            <li onClick={handleSubMenu}>THE ARTIST</li>
                        </ul>
                    </div>
                    <div class="col-auto">
                        <NavLogin />
                    </div>
                </div>
                <div class="navOverlay" style={{height: navOveraly}}>
                    <div class="navOverlayHeader" >
                        <ul class="navOverlaySubMenu">
                            <li id="closeButton" onClick={handleCloseButton}>&times;</li>
                            <li id="subMenuLogo"><img  src={LogoSymbol} alt="Logo"/>   </li>
                        </ul>
                    </div>
                    <div class="fullMenuList ">
                        <div  id="PRODUCTS" onClick={handleSubMenu}>PRODUCTS &#32; {subMenuExpand1} 
                                    <ul class="sub-menuList" style={subMenu1}>
                                        <NavLink to="/GalleryCollection"><li class="">Gallery Collection</li></NavLink>
                                        <NavLink to="/WallCoverings"><li class="">Wall Coverings</li></NavLink>
                                        <NavLink to="/WorldTravelPhotography"><li class="">World Travel Photography</li></NavLink>
                                        <NavLink to="/ArtandDesign"><li class="">Art & Design</li></NavLink>
                                    </ul>
                        </div>
                        <div  id="SERVICES" onClick={handleSubMenu}>SERVICES &#32; {subMenuExpand2}
                            <ul class="sub-menuList"  style={subMenu2}>
                                <NavLink to="/HospitalityandDesign"><li class="">Hospitality & Design</li></NavLink>
                                <NavLink to="/Installations"><li class="m">Installations</li></NavLink>
                                <NavLink to="/Lighting"><li class="">Lighting</li></NavLink>
                                <NavLink to="/TheFrameShop"><li class="">The Frame Shop</li></NavLink>
                                <NavLink to="/PrintingandServices"><li class="">Printing & Services</li></NavLink>
                            </ul>
                        </div>
                        <div  id="THEARTIST" onClick={handleSubMenu}>THE ARTIST &#32; {subMenuExpand3}
                            <ul class="sub-menuList" style={subMenu3}>
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