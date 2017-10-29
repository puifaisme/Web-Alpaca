import React from 'react'
import './../css/culture.css'
import list from './../static/picture/List.png'
import map from './../static/picture/Map.png'
import choose from './../static/picture/Choose.PNG'
import pic4 from './../static/picture/Pic4.jpg'
import tn from './../static/picture/TN.jpg'
import at from './../static/picture/AT.jpg'
import hk from './../static/picture/HK.jpg'
import './../css/bootstrap.css'


const Architecture = () => {

    return (
        <div className="m-background">
         <div className="BG margin">  
            <p className="b-culture "><button className="c-button c-font m-destination font-opan">DESTINATION</button></p> 
            <p className="t-color b-culture font-opan font-size-cul line">ARCHITECTURE</p>
            <div><img src={pic4} width="79%" className="col-12 col-md-10 center"/></div>   
            <div align="center"><img src={list} width="4%" className="t-margin"/><img src={choose} width="3%" className="t-margin"/><img src={map} width="4%" className="t-margin"/></div>
        <div className="container">
             <div className="row">
                <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={tn} className="col-12 col-md-9  m-pt border-image"/></div>
                <div className="col-6 col-md-6">
                    <p className="t-color font-pridi line1 line4 flow-tx1">ย่านตลาดน้อย</p>
                    <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">การเดินทางตามชุมชนเก่าๆ ย่านเก่าๆ ในกรุงเทพฯ สถานที่นี้เป็นอีกไอเดียหนึ่งที่จะทำให้วันหยุดของเราไม่น่าเบื่อ</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={at} className="col-12 col-md-9  m-pt border-image"/></div>
                <div className="col-6 col-md-6">
                    <p className="t-color font-pridi line1 line4 flow-tx1">เอเชียทีค เดอะ ริเวอร์ ฟรอนต์</p>
                    <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">ท่าเรือนี้ คือสัญญาณการเริ่มต้นของการทำการค้าระหว่างประเทศ เป็นแลนด์มาร์คกรุงเทพฯ ให้ทุกคนได้ไปเดินชิลล์ สบายๆ บริเวณริมแม่น้ำเจ้าพระยาในวันหยุดสั้นๆ ได้</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start margin-v"> <img src={hk} className="col-12 col-md-9  m-pt border-image"/></div>
                <div className="col-6 col-md-6">
                    <p className="t-color font-pridi line1 line4 flow-tx1">หอศิลปวัฒนธรรมแห่งกรุงเทพ</p>
                    <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">หอศิลปวัฒนธรรมของประชาชน ส่งเสริมความหลากหลายทางศิลปวัฒนธรรมเพื่อพัฒนาสังคมที่ยั่งยืน</p>
                </div>
            </div>
            </div>
           
    </div>
    </div>
  )
}

export default Architecture