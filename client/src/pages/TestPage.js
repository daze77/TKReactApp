import React  from 'react' 
import fetchJSON from '../utils/API'


import WTPJSON from '../utils/wtp.json'
import AandD from '../utils/ArtAndDesign.json'

import './TestPage.css'

import MenuBurger from "../components/MenuHamburger/MenuHamburger"

import './pages.css'


import Bill from '../utils/Testtttt'

// import NavBarAlt from '../components/NavBar/NavBarAlternate'
import NavBarAlt2 from '../components/NavBar/NavBarAlternate2'





function TestPage(){

    async function seedWTPDB(){
        console.log('btn clicked')
        const {results} = await fetchJSON('/api/wtpJSON', 'post', WTPJSON)
        console.log({results})
        return
    }

    
    async function seedARTandDesign(){
        console.log('btn clicked')
        const {results} = await fetchJSON('/api/wtpJSONAD', 'post', AandD)
        console.log('[AAND RESULTS]', {results})
        return
    }



    
    console.log("TESTING", <Bill/>)
 

    // console.log("TESTING", WTPRoutes().props.children)
    // const bbb = WTPRoutes().props.children
    // console.log('hahahahahahahha', bbb)
    return(
        <>
        {/* <NavBarAlt /> */}
        <NavBarAlt2 />
      
       
       
        <div>This is a Test Page  </div>
        <div>Here is some data: </div>
        <ul>
            <li>        <button type="button" class="btn btn-dark m-5" onClick={seedWTPDB}>Load JSON to DB - WTP</button>
</li>
            <li>        <button type="button" class="btn btn-dark m-5" onClick={seedARTandDesign}>Load JSON to DB - AandD</button>
</li>
        </ul>

        <Bill/>


        <MenuBurger />

        </>
    )
}


export default TestPage