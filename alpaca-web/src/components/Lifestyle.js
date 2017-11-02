import './../css/culture.css'
import list from './../static/picture/List.png'
import map from './../static/picture/Map.png'
import choose from './../static/picture/Choose.PNG'
import pic4 from './../static/picture/pic4.jpg'
import tn from './../static/picture/TN.jpg'
import at from './../static/picture/AT.jpg'
import hk from './../static/picture/HK.jpg'
import list1 from './../static/picture/list1.PNG'
import map1 from './../static/picture/map1.PNG'
import './../css/bootstrap.css'
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class Lifestyle extends Component{
    
    constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

render() {

    const { width } = this.state;
    const isMobile = width <= 768;

    if (isMobile) {
      return (
        <div className="m-background">
         <div className="BG">  
            <p className="b-culture "><button className="margin-t c-button c-font m-destination font-opan">DESTINATION</button></p> 
            <p className="t-color b-culture font-opan font-size line">LIFESTYLE</p>
            <div><img src={pic4} className="col-12 col-md-10 center"/></div>   
            <div align="center">
                <img src={list} width="6%" className="ttt-mar t-margin"/>
                <img src={choose} width="4%" className="t-margin"/>
                <Link to="/destination/lifestyle/map">
                    <img src={map} width="6%" className="tt-mar t-margin"/>
                </Link>
            </div>
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={tn} className="col-12 col-md-9  m-pt border-image"/></div>
                        <div className="col-6 col-md-6">
                            <p className="t-color font-pridi line1 line4 flow-tx l-h">ตลาดน้อย</p>
                            <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">ท่าเรือนี้ คือสัญญาณการเริ่มต้นของการทำการค้าระหว่างประเทศ เป็นแลนด์มาร์คกรุงเทพฯ ให้ทุกคนได้ไปเดินชิลล์ สบายๆ บริเวณริมแม่น้ำเจ้าพระยาในวันหยุดสั้นๆ ได้</p>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={at} className="col-12 col-md-9  m-pt border-image"/></div>
                        <div className="col-6 col-md-6">
                            <p className="t-color font-pridi line1 line4 flow-tx1 ">เอเชียทีค เดอะ ริเวอร์ ฟรอนต์</p>
                            <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">ท่าเรือนี้ คือสัญญาณการเริ่มต้นของการทำการค้าระหว่างประเทศ เป็นแลนด์มาร์คกรุงเทพฯ ให้ทุกคนได้ไปเดินชิลล์ สบายๆ บริเวณริมแม่น้ำเจ้าพระยาในวันหยุดสั้นๆ ได้</p>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start margin-v"> <img src={hk} className="col-12 col-md-9  m-pt border-image"/></div>
                        <div className="col-6 col-md-6">
                            <p className="t-color font-pridi line1 line4 flow-tx1">หอศิลปวัฒนธรรมแห่งกรุงเทพ</p>
                            <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">หอศิลปวัฒนธรรมของประชาชน ส่งเสริมความหลากหลายทางศิลปวัฒนธรรมเพื่อพัฒนาสังคมที่ยั่งยืน เป็นหอศิลป์ที่รวบรวมศิลปะไว้มากมาย ช่วยผ่อนคลายให้จิตใจปลอดโปร่งได้</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-1">
                </div>
            </div>
        </div>
           
    </div>
    </div>
  );
}
else {
  return (
    <div className="m-background">
         <div className="BG">  
            <p className="b-culture "><button className="margin-t c-button c-font m-destination font-opan">DESTINATION</button></p> 
            <p className="t-color b-culture font-opan font-size line">LIFESTYLE</p>
            <div><img src={pic4} className="col-12 col-md-10 center"/></div>   
            <div align="center"><img src={list1} width="9%" className="t-margin ttt-mar"/><Link to="/destination/lifestyle/map"><img src={map1} width="9%" className="t-margin tt-mar"/></Link></div>
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={tn} className="col-12 col-md-9  m-pt border-image"/></div>
                        <div className="col-6 col-md-6">
                            <p className="t-color font-pridi line1 line4 flow-tx1">ตลาดน้อย</p>
                            <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">ท่าเรือนี้ คือสัญญาณการเริ่มต้นของการทำการค้าระหว่างประเทศ เป็นแลนด์มาร์คกรุงเทพฯ ให้ทุกคนได้ไปเดินชิลล์ สบายๆ บริเวณริมแม่น้ำเจ้าพระยาในวันหยุดสั้นๆ ได้</p>
                            <p className="mar3"><button className="t-color border3 font-opan font-tx2">MORE</button></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={at} className="col-12 col-md-9  m-pt border-image"/></div>
                        <div className="col-6 col-md-6">
                            <p className="t-color font-pridi line1 line4 flow-tx1">เอเชียทีค เดอะ ริเวอร์ ฟรอนต์</p>
                            <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">ท่าเรือนี้ คือสัญญาณการเริ่มต้นของการทำการค้าระหว่างประเทศ เป็นแลนด์มาร์คกรุงเทพฯ ให้ทุกคนได้ไปเดินชิลล์ สบายๆ บริเวณริมแม่น้ำเจ้าพระยาในวันหยุดสั้นๆ ได้</p>
                            <p className="mar3"><button className="t-color border3 font-opan font-tx2">MORE</button></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start margin-v"> <img src={hk} className="col-12 col-md-9  m-pt border-image"/></div>
                        <div className="col-6 col-md-6">
                            <p className="t-color font-pridi line1 line4 flow-tx1">หอศิลปวัฒนธรรมแห่งกรุงเทพ</p>
                            <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">หอศิลปวัฒนธรรมของประชาชน ส่งเสริมความหลากหลายทางศิลปวัฒนธรรมเพื่อพัฒนาสังคมที่ยั่งยืน เป็นหอศิลป์ที่รวบรวมศิลปะไว้มากมาย ช่วยผ่อนคลายให้จิตใจปลอดโปร่งได้</p>
                            <p className="mar3"><button className="t-color border3 font-opan font-tx2">MORE</button></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-1">
                </div>
            </div>
        </div>
           
    </div>
    </div>
  );
}
}
}

export default Lifestyle;
