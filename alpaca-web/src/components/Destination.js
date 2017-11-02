import React from 'react'
import pic1 from './../static/picture/Pic1.png'
import pic2 from './../static/picture/Pic2.png'
import pic3 from './../static/picture/Pic3.png'
import pic4 from './../static/picture/Pic4.png'
import '../css/bootstrap.css'
import '../css/destination.css'

const Destination = () => {

    return (
        <div>
            {/* container */}
            <p className="t-color font-opan font-size-cyd text-center">CHOOSE YOUR DESTINATION</p>
            <hr width="20%" size="100%" color="orange"></hr>
            <div className="container b-image">
                {<p className="bottomright">CULTURAL</p>}
            </div>
            
            {/* <img src={pic1} width="100%" className="center"/>
            <img src={pic2} width="100%" className="center"/>
            <img src={pic3} width="100%" className="center"/>
            <img src={pic4} width="100%" className="center"/> */}
        </div>
        



    )
}

export default Destination