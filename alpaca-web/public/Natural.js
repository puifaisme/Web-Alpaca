import React from 'react'
import './App.css'
import pic1 from './static/picture/Pic1.jpg'
import list from './static/picture/List.png'
import map from './static/picture/Map.png'
import wp from './static/picture/WP.jpg'
import gpw from './static/picture/GPW.jpg'
import wa from './static/picture/WA.jpg'

const componentName = () => {

    return (
        <div className="m-background">
        <div className="BG margin">  
            <p className="b-culture"><button className="c-button c-font m-destination font-opan">DESTINATION</button></p> 
            <p className="t-color b-culture font-opan font-size-cul line">CULTURAL</p>
            <div><img src={pic1} width="930px" height= "400px" className="center"/></div>   
            <p Align="center"><img src={list} width="35px" height="35px"/><img src={map} width="35px" height="35px"/></p>
            <div className="flex">
                <div width="70%"> <img src={wp} className="border"/></div>
                <div width="30%">
                    <p className="font t-color font-pridi line1">วัดโพธิ์</p>
                    <p className="font1 t-color font-pridi line2">วัดพระเชตุพนวิมลมังคลาราม หรือ วัดโพธิ์เป็นพระอารมหลวงชั้นเอก ชนิดราชวรมหาวิหาร
                    เป็นวัดประจำรัชกาลในรัชกาลที่ 1 และเปรียบเสมือนเป็นมหาวิทยาลัยแห่งแรกของประเทศไทย</p>
                </div>
            </div>
            <div className="flex">
                <div width="70%"> <img src={gpw} className="border"/></div>
                <div width="30%">
                    <p className="font t-color font-pridi line1">พระบรมมหาราชวัง</p>
                    <p className="font1 t-color font-pridi line2">สร้างในสมัยรัชกาลที่ 1 เป็นสถานที่สำคัญในการประกอบพิธีต่างๆ ของไทย</p>
                </div>
            </div>
            <div className="flex">
                <div width="70%"> <img src={wa} className="border"/></div>
                <div width="30%">
                    <p className="font t-color font-pridi line1">วัดอรุณฯ</p>
                    <p className="font1 t-color font-pridi line2 ">สร้างในสมัยรัชกาลที่ 1 เป็นสถานที่สำคัญในการประกอบพิธีสำคัญต่างๆ ของไทย</p>
                </div>
            </div>
           
    </div>
    </div>
  )
}

export default componentName