import React from 'react'

import './MenuHamburger.css'



function MenuBurger(onClick){
   return(
    <>
    <div className="menuBurgerWrapper" {...onClick}>
        <div className="menuBurger"></div>
        <div className="menuBurger"></div>
        <div className="menuBurger"></div>
    </div>
    </>
    )
}



export default MenuBurger