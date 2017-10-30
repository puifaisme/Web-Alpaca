import React from 'react'
import pic4 from './../static/picture/Pic4.jpg'
import list from './../static/picture/List.png'
import map from './../static/picture/Map.png'
import placeholder from './../static/picture/placeholder.png'
import '../css/bootstrap.css'
import '../css/destination.css'

const LifestyleMap = () => {

    return (
        <div className="container">
            <p className="b-culture"><button className="b-button t-font m-destination font-opan">DESTINATION</button></p>
            <p className="t-color font-opan font-size-cyd ">CULTURAL</p>
            <img src={pic4} width="100%" className="center"/>
            <p Align="center"><img src={list} width="35px" height="35px"/><img src={map} width="35px" height="35px"/></p>
            {/* map */}
            <img src={placeholder} width="3%" height="3%" className="center"/><p className="te-color font-opan font-size-wp ">ย่านตลาดน้อย</p>
            <img src={placeholder} width="35px" height="35px" className="center"/><p className="te-color font-opan font-size-wp ">เอเชียทีค เดอะ ริเวอร์ฟร้อนท์</p>
            <img src={placeholder} width="35px" height="35px" className="center"/><p className="te-color font-opan font-size-wp ">หอศิลปวัฒนธรรมแห่งกรุงเทพฯ</p>
        </div>
        



    )

}

export default LifestyleMap