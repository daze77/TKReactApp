import React  from 'react' 
import fetchJSON from '../utils/API'
import WTPJSON from '../utils/wtp.json'


import MenuBurger from "../components/MenuHamburger/MenuHamburger"

import './pages.css'


// import NavBarAlt from '../components/NavBar/NavBarAlternate'
import NavBarAlt2 from '../components/NavBar/NavBarAlternate2'





function TestPage(){

    async function seedWTPDB(){
        console.log('btn clicked')
        const {results} = await fetchJSON('/api/wtpJSON', 'post', WTPJSON)
        console.log({results})
        return
    }

    




    return(
        <>
        {/* <NavBarAlt /> */}
        <NavBarAlt2 />
      
       
       
        <div>This is a Test Page  </div>
        <div>Here is some data: </div>
        <button type="button" class="btn btn-dark m-5" onClick={seedWTPDB}>Load JSON</button>


        <MenuBurger />


        </>
    )
}


export default TestPage