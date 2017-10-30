import React from 'react'
import pic3 from './../static/picture/Pic3.jpg'
import list from './../static/picture/List.png'
import map from './../static/picture/Map.png'
import placeholder from './../static/picture/placeholder.png'
import '../css/bootstrap.css'
import '../css/destination.css'

const HistoricalMap = () => {

    return (
        <div className="container">
            <p className="b-culture"><button className="b-button t-font m-destination font-opan">DESTINATION</button></p>
            <p className="t-color font-opan font-size-cyd ">Historical</p>
            <img src={pic3} width="100%" className="center"/>
            <p Align="center"><img src={list} width="35px" height="35px"/><img src={map} width="35px" height="35px"/></p>
            {/* map */}
            <img src={placeholder} width="3%" height="3%" className="center"/><p className="te-color font-opan font-size-wp ">พิพิธภัณฑสถานแห่งชาติ พระนคร</p>
            <img src={placeholder} width="35px" height="35px" className="center"/><p className="te-color font-opan font-size-wp ">พิพิธภัณฑ์บ้านไทย จิม ทอมป์สัน</p>
            <img src={placeholder} width="35px" height="35px" className="center"/><p className="te-color font-opan font-size-wp ">พระที่นั่งวิมานเมฆ</p>
        </div>
        



    )

}

export default HistoricalMap