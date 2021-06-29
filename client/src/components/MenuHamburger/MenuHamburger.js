import React from 'react'

import './MenuHamburger.css'



function MenuBurger(onClick){
   return(
    <>
    <div class="menuBurgerWrapper" {...onClick}>
        <div class="menuBurger"></div>
        <div class="menuBurger"></div>
        <div class="menuBurger"></div>
    </div>
    </>
    )
}



export default MenuBurger