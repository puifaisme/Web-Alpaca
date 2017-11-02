import React from 'react'
import pic3 from './../static/picture/Pic3.jpg'
import list from './../static/picture/List.png'
import map from './../static/picture/Map.png'
import map2 from './../static/picture/map2.jpg'
import choose from './../static/picture/Choose.PNG'
import placeholder from './../static/picture/placeholder.png'
import '../css/bootstrap.css'
import '../css/destination.css'

const HistoricalMap = () => {

    return (
        <div className="bg">
            <div className="container">
                <p className="b-culture"><button className="b-button t-font m-destination font-opan">DESTINATION</button></p>
                <p className="t-color font-opan font-size-cyd ">Historical</p>
                <img src={pic3} width="100%" className="center"/>
                <p Align="center"><img src={list} width="10%" className="t-margin"/><img src={choose} width="3%" className="t-margin"/><img src={map} width="10%" className="t-margin"/></p>
                
                {/* map */}
                <img src={map2} width="100%" className="center"/>    
                {/* map */}

                <div className="location t-margin ">
                    <img src={placeholder} width="3%" height="3%"/><p className="te-color font-opan font-size-wp ">1.พิพิธภัณฑสถานแห่งชาติ พระนคร</p>
                    <img src={placeholder} width="3%" height="3%"/><p className="te-color font-opan font-size-wp ">2.พิพิธภัณฑ์บ้านไทย จิม ทอมป์สัน</p>
                    <img src={placeholder} width="3%" height="3%"/><p className="te-color font-opan font-size-wp ">3.พระที่นั่งวิมานเมฆ</p>
                </div>
            </div>
        </div>
        



    )

}

export default HistoricalMap