import React, { Component } from 'react';
import './../css/culture.css'
import list from './../static/picture/List.png'
import map from './../static/picture/Map.png'
import choose from './../static/picture/Choose.PNG'
import pn from './../static/picture/PN.jpg'
import bt from './../static/picture/BT.jpg'
import wm from './../static/picture/WM.jpg'
import pic3 from './../static/picture/pic3.jpg'
import list1 from './../static/picture/list1.PNG'
import map1 from './../static/picture/map1.PNG'
import './../css/bootstrap.css'


class History extends Component{
    
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
           <p className="b-culture"><button className="margin-t c-button c-font m-destination font-opan">DESTINATION</button></p> 
           <p className="t-color b-culture font-opan font-size line">HISTORICAL</p>
           <div><img src={pic3} width="79%" className="col-12 col-md-10 center"/></div>   
           <div align="center"><img src={list} width="6%" className="ttt-mar t-margin"/><img src={choose} width="4%" className="t-margin"/><img src={map} width="6%" className="tt-mar t-margin"/></div>
       <div className="container">
       <div className="row">
       <div className="col-md-1">
               </div>
           <div className="col-md-10">
            <div className="row">
               <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={pn} className="col-12 col-md-9 m-pt border-image"/></div>
               <div className="col-6 col-md-6">
                   <p className="t-color font-pridi line1 line4 flow-tx1">พิพิธภัณฑ์สถานแห่งชาติพระนคร</p>
                   <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">พิพิธภัณฑสถานสำหรับประชาชนแห่งแรกของประเทศไทย สร้างเพื่อจัดแสดงข้อมูลทางด้านประวัติศาสตร์ ประวัติศาสตร์ศิลปะ โบราณคดี และชาติพันธุ์วิทยา</p>
               </div>
           </div>
           <div className="row">
               <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={bt} className="col-12 col-md-9 m-pt border-image"/></div>
               <div className="col-6 col-md-6">
                   <p className="t-color font-pridi line1 line4 flow-tx1">พิพิธภัณฑ์บ้านไทย จิม ทอมป์สัน</p>
                   <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">บ้านเรือนไทยของอดีตนายทหารอเมริกัน เจมส์ เอช. ดับเบิลยู. ทอมป์สัน ผู้บุกเบิกอุตสาหกรรมไหมไทย</p>                   
               </div>
           </div>
           <div className="row">
               <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start margin-v"> <img src={wm} className="col-12 col-md-9 m-pt border-image"/></div>
               <div className="col-6 col-md-6">
                   <p className="t-color font-pridi line1 line4 flow-tx1 l-h">พระที่นั่งวิมานเมฆ</p>
                   <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">พระที่นั่งวิมานเมฆ เป็นพระที่นั่งถาวรองค์แรกในพระราชวังดุสิต สร้างด้วยไม้สักทองทั้งหลัง และนับว่าเป็นอาคารไม้สัก ทองที่ใหญ่ที่สุดในโลก</p>
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
           <p className="b-culture"><button className="margin-t c-button c-font m-destination font-opan">DESTINATION</button></p> 
           <p className="t-color b-culture font-opan font-size line">HISTORICAL</p>
           <div><img src={pic3} width="79%" className="col-12 col-md-10 center"/></div>   
           <div align="center"><img src={list1} width="9%" className="ttt-mar t-margin"/><img src={map1} width="9%" className="tt-mar t-margin"/></div>
       <div className="container">
       <div className="row">
       <div className="col-md-1">
               </div>
           <div className="col-md-10">
            <div className="row">
               <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={pn} className="col-12 col-md-9 m-pt border-image"/></div>
               <div className="col-6 col-md-6">
                   <p className="t-color font-pridi line1 line4 flow-tx1">พิพิธภัณฑ์สถานแห่งชาติพระนคร</p>
                   <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">พิพิธภัณฑสถานสำหรับประชาชนแห่งแรกของประเทศไทย สร้างเพื่อจัดแสดงข้อมูลทางด้านประวัติศาสตร์ ประวัติศาสตร์ศิลปะ โบราณคดี และชาติพันธุ์วิทยา</p>
                   <p className="mar3"><button className="t-color border3 font-opan font-tx2">MORE</button></p>
               </div>
           </div>
           <div className="row">
               <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={bt} className="col-12 col-md-9 m-pt border-image"/></div>
               <div className="col-6 col-md-6">
                   <p className="t-color font-pridi line1 line4 flow-tx1">พิพิธภัณฑ์บ้านไทย จิม ทอมป์สัน</p>
                   <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">บ้านเรือนไทยของอดีตนายทหารอเมริกัน เจมส์ เอช. ดับเบิลยู. ทอมป์สัน ผู้บุกเบิกอุตสาหกรรมไหมไทย</p>
                   <p className="mar3"><button className="t-color border3 font-opan font-tx2">MORE</button></p>
               </div>
           </div>
           <div className="row">
               <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start margin-v"> <img src={wm} className="col-12 col-md-9 m-pt border-image"/></div>
               <div className="col-6 col-md-6">
                   <p className="t-color font-pridi line1 line4 flow-tx1">พระที่นั่งวิมานเมฆ</p>
                   <p className="col-md-11 font1 t-color font-pridi line2 line3 flow-text">พระที่นั่งวิมานเมฆ เป็นพระที่นั่งถาวรองค์แรกในพระราชวังดุสิต สร้างด้วยไม้สักทองทั้งหลัง และนับว่าเป็นอาคารไม้สัก ทองที่ใหญ่ที่สุดในโลก</p>
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

export default History;
