import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import {StoreProvider} from "./utils/GlobalStore"



// components

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'


// pages
import Login from './pages/Login'
import Logout from './pages/Logout'

import Register from './pages/Register'

import Homepage from './pages/Homepage'
import TheArtist from './pages/TheArtist/TheArtist'
import GalleryCollection from './pages/GalleryCollection/GalleryCollection'
import HospitalityandDesign from './pages/HospitalityandDesign/HospitalityandDesign'
import Lighting from './pages/Lighting/Lighting'
import Installations from './pages/Installations/Installations'


import TheFrameShop from './pages/TheFrameShop/TheFrameShop'

import PrintingandServices from './pages/PrintingandServices/PrintingandServices'

import Testimonials from './pages/Testimonials/Testimonials'

import Contact from './pages/Contact/Contact'

import WallCoverings from './pages/WallCoverings'
import WTP from './pages/WTP'
import ArtandDesign from './pages/ArtandDesign'
import About from './pages/TheArtist/TheArtist'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Travelogue from './pages/Travelogue/Travelogue'
import Videos from './pages/Videos/Videos'





import logo from './logo.svg';
import './App.css';


// css
import './pages/pages.css'


function App() {
  return (

    <StoreProvider>
      <BrowserRouter>
        <NavBar />
      
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Logout' component={Logout} />
        <Route exact path='/Register' component={Register} />
        <Route exact path={['/', 'index']} component={Homepage} />
        <Route exact path='/About' component={About} />

        <Route exact path='/TheArtist' component={TheArtist} />
        <Route exact path='/GalleryCollection' component={GalleryCollection} />
        <Route exact path='/HospitalityandDesign' component={HospitalityandDesign} />
        <Route exact path='/Lighting' component={Lighting} />
        <Route exact path='/TheFrameShop' component={TheFrameShop} />
        <Route exact path='/Installations' component={Installations} />

        <Route exact path='/PrintingandServices' component={PrintingandServices} />
        <Route exact path='/Testimonials' component={Testimonials} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/PrivacyPolicy' component={PrivacyPolicy} />
        <Route exact path='/Travelogue' component={Travelogue} />
        <Route exact path='/Videos' component={Videos} />






        <Route exact path='/WallCoverings' component={WallCoverings} />

        <Route exact path='/WTP' component={WTP} />

        <Route exact path='/ArtandDesign' component={ArtandDesign} />

   

      
      
      
      
      <Footer />
      </BrowserRouter>

    </StoreProvider>


  );
}

export default App;
