import React from 'react'
import Destination from './components/Destination'
import CulturalMap from './components/CulturalMap'
import HistoricalMap from './components/HistoricalMap'
import LifestyleMap from './components/LifestyleMap'
import NaturalMap from './components/NaturalMap'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import './css/animate.css'
import './css/style.css'
import './css/bootstrap.css'


const App = () => {

    return (
        
    <div>
        <Navbar/>

        <Destination/>
        {/* <CulturalMap/> */}
        {/* <HistoricalMap/> */}
        {/* <LifestyleMap/> */}
        {/* <NaturalMap/> */}
        
        <Footer/>
    </div>
  )
}

export default App