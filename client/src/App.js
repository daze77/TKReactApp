import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
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

      <Routes >
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/UserProfile' element={<UserProfile/>} />
        <Route exact path='/UtilitiesPage' element={<UtilitiesPage/>} />

        <Route exact path='/Logout' element={<Logout/>} />
        <Route exact path='/Register' element={<Register/>} />
        <Route exact path={'/'} element={<Homepage/>} />
        <Route exact path='/About' element={<About/>} />

        <Route exact path='/TheArtist' element={<TheArtist/>} />
        <Route exact path='/HospitalityandDesign' element={<HospitalityandDesign/>} />
        <Route exact path='/Lighting' element={<Lighting/>} />
        <Route exact path='/TheFrameShop' element={<TheFrameShop/>} />
        <Route exact path='/Installations' element={<Installations/>} />

        <Route exact path='/PrintingandServices' element={<PrintingandServices/>} />
        <Route exact path='/Testimonials' element={<Testimonials/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
        <Route exact path='/Travelogue' element={<Travelogue/>} />
        <Route exact path='/Videos' element={<Videos/>} />
        <Route exact path='/Travel-Tips' element={<TravelTips/>} />
        <Route exact path='/ReturnPolicy' element={<ReturnPolicy/>} />
        <Route exact path='/CustomerService' element={<CustomerService/>} />
        <Route exact path='/ArtandDesign' element={<ArtandDesign/>} />

        <Route exact path='/CheckoutPage' element={<CheckoutPage/>} />







      {/* The following are all the routes for the GalleryCollection and SubPages */}

        <Route exact path='/GalleryCollection' element={<GalleryCollection/>} />
        <Route exact path='/GalleryCollection/Abstract' element={<Abstract/>} />
        <Route exact path='/GalleryCollection/Classics' element={<Classics/>} />
        <Route exact path='/GalleryCollection/Opulence' element={<Opulence/>} />
        <Route exact path='/GalleryCollection/People' element={<People/>} />
        <Route exact path='/GalleryCollection/TheModern' element={<TheModern/>} />
        <Route exact path='/GalleryCollection/Urbano' element={<Urbano/>} />
        <Route exact path='/WorldTravelPhotography' element={<WTP/>} />
        <Route exact path='/HomePageAlternate' element={<HomePageAlternate/>} />
        <Route exact path='/TestPage' element={<TestPage/>} />


      {/* The following are all the routes for the WallCoverings and SubPages */}
        <Route exact path='/WallCoverings' element={<WallCoverings/>}/>

        <Route exact path='/WallCoverings/Abstract' element={<WCAbstract/>} />
        <Route exact path='/WallCoverings/Architectural' element={<WCArchitectural/>} />
        <Route exact path='/WallCoverings/Asiatic' element={<WCAsiatic/>} />
        <Route exact path='/WallCoverings/Details' element={<WCDetails/>} />
        <Route exact path='/WallCoverings/Dezine' element={<WCDezine/>} />
        <Route exact path='/WallCoverings/Ethnica' element={<WCEthnica/>} />
        <Route exact path='/WallCoverings/Exotica' element={<WCExotica/>} />
        <Route exact path='/WallCoverings/Floral' element={<WCFloral/>} />
        <Route exact path='/WallCoverings/LaBibliotheque' element={<WCLaBibliotheque/>} />
        <Route exact path='/WallCoverings/LaParisienne' element={<WCLaParisienne/>} />
        <Route exact path='/WallCoverings/Luce' element={<WCLuce/>} />
        <Route exact path='/WallCoverings/Motif' element={<WCMotif/>} />
        <Route exact path='/WallCoverings/Organica' element={<WCOrganica/>} />
        <Route exact path='/WallCoverings/Steel' element={<WCSteel/>} />
        <Route exact path='/WallCoverings/Stripes' element={<WCStripes/>} />
        <Route exact path='/WallCoverings/Subway' element={<WCSubway/>} />
        <Route exact path='/WallCoverings/Wood' element={<WCWood/>} />




      {/* The following are the routes for all the WTP Subpages */}
         {/* {WTPJSON.map(a => (
            <WTPRouterPages 
                key={a.ImageName}
                _id={a.ImageName}
                Link={a.Link}
                SubPage={WTPSubpage}
            />

       ))} */}
      </Routes>

      <Footer />
      </BrowserRouter>

    </StoreProvider>




 








    </>


  );
}

export default App;
