import React from 'react'
import './../css/culture.css'
import list from './../static/picture/List.png'
import map from './../static/picture/Map.png'
import choose from './../static/picture/Choose.PNG'
import pic2 from './../static/picture/Pic2.jpg'
import kd from './../static/picture/KD.jpg'
import pk from './../static/picture/PK.jpg'
import bp from './../static/picture/BP.jpg'
import './../css/bootstrap.css'


const Natural = () => {

    return (
        <div className="m-background">
         <div className="BG margin">  
            <p className="b-culture "><button className="c-button c-font m-destination font-opan">DESTINATION</button></p> 
            <p className="t-color b-culture font-opan font-size-cul line">NATURAL</p>
            <div><img src={pic2} width="79%" className="center"/></div>   
            <div align="center"><img src={list} width="4%" className="t-margin"/><img src={choose} width="3%" className="t-margin"/><img src={map} width="4%" className="t-margin"/></div>
        <div className="container">
             <div className="row">
                <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={kd} className="col-12 col-md-9  m-pt border-image"/></div>
                <div className="col-6 col-md-6">
                    <p className=" t-color font-pridi line1 line4 flow-tx">สวนสัตว์เขาดิน</p>
                    <p className="font1 t-color font-pridi line2 line3 flow-text">สถานที่ท่องเที่ยวสำหรับครอบครัวในทุกยุค ทุกสมัย และที่นี่เป็นสวนสัตว์แห่งแรกในประเทศไทย ซึ่งก็มีสัตว์มากมายหลากหลายชนิดทำให้มีความตื่นตาตื่นใจ
                        สำหรับทุกคนแน่นอน</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={pk} className="col-12 col-md-9  m-pt border-image"/></div>
                <div className="col-6 col-md-6">
                    <p className=" t-color font-pridi line1 line4 flow-tx">ป่าในกรุง</p>
                    <p className="font1 t-color font-pridi line2 line3 flow-text">" ศูนย์เรียนรู้ป่าในกรุง " ถ.สุขาภิบาล 2 เป็นการพัฒนาพื้นที่สีเขียวในที่ดินของ ปตท. ซึ่งเป็นสถานที่ที่ให้ความรู้สึกเกี่ยวกับธรรมชาติมาก</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start margin-v"> <img src={bp} className="col-12 col-md-9  m-pt border-image"/></div>
                <div className="col-6 col-md-6">
                    <p className=" t-color font-pridi line1 line4 flow-tx">บางปู</p>
                    <p className="font1 t-color font-pridi line2 line3 flow-text">เป็นสถานที่ท่องเที่ยวในแบบพักผ่อน ตากอากาศทางชายทะเลด้านอ่าวไทยที่มีชื่อเสียงแห่งหนึ่งของประเทศไทย โดยสำหรับผู้ที่สนใจจะหาความรู้หรือทำกิจกรรมจิตอาสา ที่บางปูนี้ก็มีกิจกรรม
                        ในการรองรับความต้องการนั้น
                    </p>
                </div>
            </div>
        </div>
           
    </div>
    </div>
  )
}

export default Natural