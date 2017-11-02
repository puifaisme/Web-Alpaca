import React from 'react'
import pic1 from './../static/picture/Pic1.jpg'
import list from './../static/picture/List.png'
import map from './../static/picture/Map.png'
import map1 from './../static/picture/map1.jpg'
import choose from './../static/picture/Choose.PNG'
import placeholder from './../static/picture/placeholder.png'
import '../css/bootstrap.css'
import '../css/destination.css'

const CulturalMap = () => {

    return (
        <div className="bg">
            <div className="container">
                <p className="b-culture"><button className="b-button t-font m-destination font-opan">DESTINATION</button></p>
                <p className="t-color font-opan font-size-cyd ">CULTURAL</p>
                <img src={pic1} width="100%" className="center"/>
                <p Align="center"><img src={list} width="10%" className="t-margin"/><img src={choose} width="3%" className="t-margin"/><img src={map} width="10%" className="t-margin"/></p>
                
                {/* map */}
                <img src={map1} width="100%" className="center"/>
                {/* map */}

                <div className="location t-margin ">
                    <img src={placeholder} width="3%" height="3%" /><p className="te-color font-opan font-size-wp ">1.วัดโพธิ์</p>
                    <img src={placeholder} width="3%" height="3%" /><p className="te-color font-opan font-size-wp ">2.พระบรมมหาราชวัง</p>
                    <img src={placeholder} width="3%" height="3%" /><p className="te-color font-opan font-size-wp ">3.วัดอรุณราชวราราม</p>
                </div>
            </div>
        </div>
        



    )

}

export default CulturalMap