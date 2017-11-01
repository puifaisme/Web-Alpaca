import React from 'react'
import Culture from './components/Culture'
import Natural from './components/Natural'
import History from './components/History'
import Lifestyle from './components/Lifestyle'
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
        {/* <Culture/> */}
        <Natural/>
        {/* <History/> */}
        {/* <Lifestyle/> */}
        {/* <About/> */}
        <Footer/>
    </div>
  )
}

export default App