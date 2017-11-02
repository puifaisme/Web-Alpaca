import React from 'react'
import Destination from './components/Destination'
import CulturalMap from './components/CulturalMap'
import HistoricalMap from './components/HistoricalMap'
import LifestyleMap from './components/LifestyleMap'
import NaturalMap from './components/NaturalMap'
import Navbar from './components/Navbar_S'
import Footer from './components/Footer'


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