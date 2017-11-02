import React from 'react'
import Destination from './components/Destination'
import CulturalMap from './components/CulturalMap'
import HistoricalMap from './components/HistoricalMap'
import LifestyleMap from './components/LifestyleMap'
import NaturalMap from './components/NaturalMap'
import Cultural from './components/Culture'
import Historical from './components/History'
import Lifestyle from './components/Lifestyle'
import Natural from './components/Natural'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Home from './pages/Home'
import Info from './pages/Info'
import './css/animate.css'
import './css/style.css'
import './css/bootstrap.css'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


const App = () => {
    var mylink = Link;
    return (
        
    <div>
        <Router>
            <div>
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/destination" component={Destination}/>
                <Route exact path="/destination/cultural" component={Cultural}/>
                <Route exact path="/destination/natural" component={Natural}/>
                <Route exact path="/destination/historical" component={Historical}/>
                <Route exact path="/destination/lifestyle" component={Lifestyle}/>
                <Route exact path="/destination/lifestyle/map" component={LifestyleMap}/>
                <Route exact path="/destination/cultural/map" component={CulturalMap}/>
                <Route exact path="/destination/natural/map" component={NaturalMap}/>
                <Route exact path="/destination/historical/map" component={HistoricalMap}/>
                <Route exact path="/destination/cultural/watpho" component={Info}/>
                <Route exact path="/about" component={About}/>
                {/* <Home/> */}
                {/* <Destination/> */}
                {/* <CulturalMap/> */}
                {/* <HistoricalMap/> */}
                {/* <LifestyleMap/> */}
                {/* <NaturalMap/> */}
                <Footer/>
            </div>
        </Router>
    </div>
  )
}

export default App