import React from 'react'
import Culture from './components/Culture'
import Natural from './components/Natural'
import History from './components/History'
import Navbar from './components/Navbar_S'
import Footer from './components/Footer'


const App = () => {

    return (
        
    <div>
        <Navbar/>
        {/* <Culture/> */}
        {/* <Natural/> */}
        <History/>
        <Footer/>
    </div>
  )
}

export default App