import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import {StoreProvider} from "./utils/GlobalStore"

import WTPSubpage from './pages/WTP/WTPSubpage' 

import WTPRouterPages from './utils/BrowserRoutes'
import WTPJSON from './utils/wtp.json'



// elements

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'


// pages
// import Payments from './pages/Payments/Payments'

import Login from './pages/Login'
import Logout from './pages/Logout'
import UserProfile from './pages/UserProfile/UserProfile'
import UtilitiesPage from './pages/SiteUtilities/UtitlitesPage'


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

import WallCoverings from './pages/WallCoverings/WallCoverings'
import WTP from './pages/WTP/WTP'
import ArtandDesign from './pages/ArtAndDesign/ArtandDesign'
import About from './pages/TheArtist/TheArtist'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Travelogue from './pages/Travelogue/Travelogue'
import Videos from './pages/Videos/Videos'
import TravelTips from './pages/TravelTips/TravelTips'
import ReturnPolicy from './pages/ReturnPolicy/ReturnPolicy'
import CustomerService from './pages/CustomerService/CustomerService'



import Abstract from './pages/GalleryCollection/Abstract'
import Classics from './pages/GalleryCollection/Classics'
import People from './pages/GalleryCollection/People'
import TheModern from './pages/GalleryCollection/TheModern'
import Urbano from './pages/GalleryCollection/Urbano'
import Opulence from './pages/GalleryCollection/Opulence'



import WCAbstract from './pages/WallCoverings/WCAbstract' 
import WCArchitectural from './pages/WallCoverings/WCArchitectural' 
import WCAsiatic from './pages/WallCoverings/WCAsiatic' 
import WCDetails from './pages/WallCoverings/WCDetails' 
import WCDezine from './pages/WallCoverings/WCDezine' 

import WCEthnica from './pages/WallCoverings/WCEthnica' 
import WCExotica from './pages/WallCoverings/WCExotica' 
import WCFloral from './pages/WallCoverings/WCFloral' 
import WCLaBibliotheque from './pages/WallCoverings/WCLaBibliotheque' 
import WCLaParisienne from './pages/WallCoverings/WCLaParisienne' 
import WCLuce from './pages/WallCoverings/WCLuce' 
import WCMotif from './pages/WallCoverings/WCMotif' 
import WCOrganica from './pages/WallCoverings/WCOrganica' 
import WCSteel from './pages/WallCoverings/WCSteel' 
import WCStripes from './pages/WallCoverings/WCStripes' 
import WCSubway from './pages/WallCoverings/WCSubway' 
import WCWood from './pages/WallCoverings/WCWood' 





import HomePageAlternate from './pages/HomePage-Alternage/HomepageAlternate'

import TestPage from './pages/TestPage'

import CheckoutPage from './pages/CheckoutPage/CheckoutPage'



// css
import './App.css';
import './pages/pages.css'


// function Profile() {
//   const location = useLocation();
//   useEffect(() => {
//     const currentPath = location.pathname;
//     const searchParams = new URLSearchParams(location.search);
//   }, [location]);
//   return <p>Profile</p>;
// }
// Profile()
//   console.log(Profile)



function App(location) {
  // console.log(location.location)

  return (
    <>
 



    <StoreProvider>
      <BrowserRouter>
      <NavBar />
      <ScrollToTop />

      {/* <BrowserRouter > */}
        <Route exact path='/Login' component={Login} />
        <Route exact path='/UserProfile' component={UserProfile} />
        <Route exact path='/UtilitiesPage' component={UtilitiesPage} />

        <Route exact path='/Logout' component={Logout} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/About' component={About} />

        <Route exact path='/TheArtist' component={TheArtist} />
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
        <Route exact path='/Travel-Tips' component={TravelTips} />
        <Route exact path='/ReturnPolicy' component={ReturnPolicy} />
        <Route exact path='/CustomerService' component={CustomerService} />
        <Route exact path='/ArtandDesign' component={ArtandDesign} />

        <Route exact path='/CheckoutPage' component={CheckoutPage} />







      {/* The following are all the routes for the GalleryCollection and SubPages */}

        <Route exact path='/GalleryCollection' component={GalleryCollection} />
        <Route exact path='/GalleryCollection/Abstract' component={Abstract} />
        <Route exact path='/GalleryCollection/Classics' component={Classics} />
        <Route exact path='/GalleryCollection/Opulence' component={Opulence} />
        <Route exact path='/GalleryCollection/People' component={People} />
        <Route exact path='/GalleryCollection/The Modern' component={TheModern} />
        <Route exact path='/GalleryCollection/Urbano' component={Urbano} />
        <Route exact path='/WorldTravelPhotography' component={WTP} />
        <Route exact path='/HomePageAlternate' component={HomePageAlternate} />
        <Route exact path='/TestPage' component={TestPage} />


      {/* The following are all the routes for the WallCoverings and SubPages */}
        <Route exact path='/WallCoverings' component={WallCoverings}/>

        <Route exact path='/WallCoverings/Abstract' component={WCAbstract} />
        <Route exact path='/WallCoverings/Architectural' component={WCArchitectural} />
        <Route exact path='/WallCoverings/Asiatic' component={WCAsiatic} />
        <Route exact path='/WallCoverings/Details' component={WCDetails} />
        <Route exact path='/WallCoverings/Dezine' component={WCDezine} />
        <Route exact path='/WallCoverings/Ethnica' component={WCEthnica} />
        <Route exact path='/WallCoverings/Exotica' component={WCExotica} />
        <Route exact path='/WallCoverings/Floral' component={WCFloral} />
        <Route exact path='/WallCoverings/LaBibliotheque' component={WCLaBibliotheque} />
        <Route exact path='/WallCoverings/LaParisienne' component={WCLaParisienne} />
        <Route exact path='/WallCoverings/Luce' component={WCLuce} />
        <Route exact path='/WallCoverings/Motif' component={WCMotif} />
        <Route exact path='/WallCoverings/Organica' component={WCOrganica} />
        <Route exact path='/WallCoverings/Steel' component={WCSteel} />
        <Route exact path='/WallCoverings/Stripes' component={WCStripes} />
        <Route exact path='/WallCoverings/Subway' component={WCSubway} />
        <Route exact path='/WallCoverings/Wood' component={WCWood} />




      {/* The following are the routes for all the WTP Subpages */}
         {WTPJSON.map(a => (
            <WTPRouterPages 
                key={a.ImageName}
                _id={a.ImageName}
                Link={a.Link}
                SubPage={WTPSubpage}
            />

       ))}

      <Footer />
      </BrowserRouter>

    </StoreProvider>




 








    </>


  );
}

export default App;
