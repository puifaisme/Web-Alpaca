import React from 'react'
import './../css/culture.css'
import pic1 from './../static/picture/Pic1.jpg'
import list from './../static/picture/List.png'
import map from './../static/picture/Map.png'
import wp from './../static/picture/WP.jpg'
import gpw from './../static/picture/GPW.jpg'
import wa from './../static/picture/WA.jpg'
import choose from './../static/picture/Choose.PNG'
import list1 from './../static/picture/list1.PNG'
import map1 from './../static/picture/map1.PNG'
import './../css/bootstrap.css'


const Culture = () => {

    return (
        <div className="m-background">
         <div className="BG">  
            <p className="b-culture "><button className="c-button c-font m-destination font-opan">DESTINATION</button></p> 
            <p className="t-color b-culture font-opan font-size line">CULTURAL</p>
            <div><img src={pic1} width="79%" className="center"/></div>   
            <div align="center"><img src={list1} width="9%" className="ttt-mar t-margin"/><img src={map1} width="9%" className="tt-mar t-margin"/></div>
        <div className="container">
        <div className="row">
           <div className="col-md-1">
               </div>
           <div className="col-md-10">
           <div className="row">
                <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={wp} className="col-12 col-md-9  m-pt border-image"/></div>
                <div className="col-6 col-md-6">
                    <p className=" t-color font-pridi line1 line4 flow-tx">วัดโพธิ์</p>
                    <p className="font1 t-color font-pridi line2 line3 flow-text">วัดพระเชตุพนวิมลมังคลาราม หรือ วัดโพธิ์เป็นพระอารมหลวงชั้นเอก ชนิดราชวรมหาวิหาร
                    เป็นวัดประจำรัชกาลในรัชกาลที่ 1 และเปรียบเสมือนเป็นมหาวิทยาลัยแห่งแรกของประเทศไทย</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start"> <img src={gpw} className="col-12 col-md-9  m-pt border-image"/></div>
                <div className="col-6 col-md-6">
                    <p className=" t-color font-pridi line1 line4 flow-tx1">พระบรมมหาราชวัง</p>
                    <p className="font1 t-color font-pridi line2 line3 flow-text">สร้างในสมัยรัชกาลที่ 1 เป็นสถานที่สำคัญในการใช้เป็นสถานที่ประกอบพระราชพิธีสำคัญต่าง ๆ ตามพระราชประเพณี  เป็นที่รับแขกเมือง และพระราชอาคันตุกะ รวมทั้งเป็นที่ตั้งพระบรมศพและพระศพของพระบรมวงศานุวงศ์ชั้นสูง</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-md-6 d-flex align-items-center align-items-md-start margin-v"> <img src={wa} className="col-12 col-md-9  m-pt border-image"/></div>
                <div className="col-6 col-md-6">
                    <p className=" t-color font-pridi line1 line4 flow-tx">วัดอรุณฯ</p>
                    <p className="font1 t-color font-pridi line2 line3 flow-text">เป็นวัดที่มีมาตั้งแต่ครั้งสมัยกรุงศรีอยุธยา เดิมชื่อว่า "วัดแจ้ง" วัดนี้ได้รับการบูรณะปฏิสังขรณ์ครั้งใหญ่ในสมัยรัชกาลที่ 2 จึงถือเป็นวัดประจำรัชกาลที่ 2 เมื่อบูรณะเสร็จแล้วได้พระราชทานนามว่า "วัดอรุณราชธาราม"</p>
                </div>
                </div>
                </div>
                <div className="col-md-1">
                    </div>
                </div>
                </div>
               
        </div>
        </div>
      )
    }
    
    export default History