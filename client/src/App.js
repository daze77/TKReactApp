import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import {StoreProvider} from "./utils/GlobalStore"

// components

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'


// pages
import Homepage from './pages/Homepage'
import TheArtist from './pages/TheArtist/TheArtist'
import GalleryCollection from './pages/GalleryCollection/GalleryCollection'
import WallCoverings from './pages/WallCoverings'
import WTP from './pages/WTP'
import ArtandDesign from './pages/ArtandDesign'
import About from './pages/TheArtist/TheArtist'





import logo from './logo.svg';
import './App.css';


function App() {
  return (

    <StoreProvider>
      <BrowserRouter>
        <NavBar />
      

        <Route exact path={['/', 'index']} component={Homepage} />
        <Route exact path='/About' component={About} />

        <Route exact path='/TheArtist' component={TheArtist} />
        <Route exact path='/GalleryCollection' component={GalleryCollection} />

        <Route exact path='/WallCoverings' component={WallCoverings} />

        <Route exact path='/WTP' component={WTP} />

        <Route exact path='/ArtandDesign' component={ArtandDesign} />

   

      
      
      
      
      <Footer />
      </BrowserRouter>

    </StoreProvider>


  );
}

export default App;
