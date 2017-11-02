import React from 'react'
import pic4 from './../static/picture/Pic4.jpg'
import list from './../static/picture/List.png'
import map from './../static/picture/Map.png'
import map3 from './../static/picture/map3.jpg'
import choose from './../static/picture/Choose.PNG'
import placeholder from './../static/picture/placeholder.png'
import '../css/bootstrap.css'
import '../css/destination.css'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

const LifestyleMap = () => {

    return (
        <div className="bg">
            <div className="container">
                <p className="b-culture"><button className="b-button t-font m-destination font-opan">DESTINATION</button></p>
                <p className="t-color font-opan font-size-cyd ">CULTURAL</p>
                <img src={pic4} width="100%" className="center"/>
                <p Align="center"><Link to="/destination/lifestyle"><img src={list} width="10%" className="t-margin"/></Link><img src={choose} width="3%" className="t-margin"/><img src={map} width="10%" className="t-margin"/></p>
                
                {/* map */}
                <img src={map3} width="100%" className="center"/>
                {/* map */}

                <div className="location t-margin ">
                    <img src={placeholder} width="3%" height="3%"/><p className="te-color font-opan font-size-wp ">1.ย่านตลาดน้อย</p>
                    <img src={placeholder} width="3%" height="3%"/><p className="te-color font-opan font-size-wp ">2.เอเชียทีค เดอะ ริเวอร์ฟร้อนท์</p>
                    <img src={placeholder} width="3%" height="3%"/><p className="te-color font-opan font-size-wp ">3.หอศิลปวัฒนธรรมแห่งกรุงเทพฯ</p>
                </div>
            </div>
        </div>
        



    )

}

export default LifestyleMap