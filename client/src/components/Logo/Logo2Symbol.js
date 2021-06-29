import React, {useEffect} from 'react'

import anime from 'animejs'

import './Logo.css'

import LogoSymbol from '../../assets/logo/logosymbol.png'


function LogoSymbolOnly(onCLick){
    
    useEffect( function(){  
  // animation for the symbol part of the logo
  anime({
    targets: '.tkLogoSymbolContainer1 .el1',
    translateX: function(el1) {
      return el1.getAttribute('data-x');
    },
    translateY: function(el1, i) {
      return 150 + (-50 * i);
    },
    translateX: function(el1, i) {
      return 200 + (-50 * i);
    },
    scale: function(el1, i, l) {
      return (l - i) + 1;
    },
    rotate: function() { return anime.random(-360, 360); },
    borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
    duration: function() { return anime.random(2200, 2800); },
    delay: function() { return anime.random(0, 400); },
    direction: 'alternate',
    loop: 2
  });
  
  // // animation for the name part of the logo
  // let animation = anime.timeline({loop: 2})
  //   .add({
  //     targets: '.tkLogoName .el',
  //     translateY: ["5.5em", 0],
  //     translateZ: 0,
  //     duration: 750,
  //     delay: (el, i) => 50 * i,
  //     direction: "alternate"
  //   }).add({
  //     targets: '.tkLogoName',
  //     opacity: 0,
  //     duration: 1000,
  //     easing: "easeOutExpo",
  //     delay: 1000
  //   })
  
  
  // animation.finished.then(showText)
  
  // this function resets the opacity so the name part of the logo appears following the animation
  
  // function showText(){
  //   anime.set(document.querySelector('.tkLogoName').style.opacity=1
  //   )
  // }

}, [] )
  
return (
    <>
    <div class="tkLogocontainer1" {...onCLick}>
        <div class="tkLogoSymbolContainer1">
            <div class="logoimg1 el1" data-x="300">
                <svg width="70" height="70"
                    xmlns="http://www.w3.org/2000/svg">
                    <image href={LogoSymbol} height="70" width="70" />
                </svg>
            </div>

        </div>
    </div>
    </>
)
}



export default LogoSymbolOnly