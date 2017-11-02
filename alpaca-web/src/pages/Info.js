import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import Watpho from '../img/watpho.jpg';

class Info extends Component{

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

  render(){
    const { width } = this.state;
    const isMobile = width <= 1023;
    
    if (isMobile) {
      return (
        <div name="placeInfo" className="">
          <div>
            <div className=" p-1 col-sm-2 col-4 text-center mb-2 ml-4 mt-4" id="text2">CULTURAL</div>
            <div style={{fontSize: 200+'%'}} className=" ml-4 mb-2">วัดโพธิ์</div>
            <img src={Watpho} width="100%" className="mb-2" />
          </div>
          <div name="text">
            <ul className=" nav">
              <div className=" col-10 ml-auto mr-auto">
                <li className=" mt-5" id="text4">วัดพระเชตุพนวิมลมังคลาราม ราชวรมหาวิหาร หรือ วัดโพธิ์ท่าเตียน เป็นวัดประจำรัชกาลที่ 1
                  และเปรียบเสมือนเป็นมหาวิทยาลัยแห่งแรกของประเทศไทย เนื่องจากเป็นที่รวมจารึกสรรพวิชา
                  หลายแขนงนอกจากนี้ทางยูเนสโกได้ขึ้นทะเบียนเป็นมรดกความทรงจำโลกของภูมิภาคเอเชีย
                  แปซิฟิก เมื่อ มีนาคม พ.ศ. 2551 อีกด้วย
                </li>
              </div>
              <div name="map" className=" mb-2 col-10 ml-auto mr-auto">
                <div className=" text-center mt-4 mb-1" style={{fontSize: 30+'px'}}>MAP</div>
                <div width="70%" style={{height:200+'px'}} className= "text-center" id="map1">นี่แผนที่ไงจำไม่ได้หรอ</div>
              </div>
              <div className=" col-10 d-inline-block ml-auto mr-auto">
                <li className="text-center">
                  <div style={{fontSize: 30+'px'}} className="mb-2 mt-5">CONTACT</div>
                  <div id="text4" className="mb-3">
                    <p> 02-226-0035 </p>
                    <p> http://www.watpho.com/ </p>
                  </div>
                </li>
                <li className="text-center">
                  <div style={{fontSize: 30+'px'}} className="mb-2 mt-5">HOURS</div>
                  <div id="text4" className="mb-5">
                    <p> ทุกวัน 8.30 - 18.00 น.</p>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      );
    }

    else {
      return (
        <div name="placeInfo" className=" container">
          <div id="margint"></div>
          <div className=" p-0 col-1 text-center mb-2" id="text2">CULTURAL</div>
          <div id="text3">วัดโพธิ์</div>
          <img src={Watpho} width="100%" className="mb-5" />
          <div name="text">
            <ul className=" nav">
              <div className=" col-6 d-inline-block">
                <li className=" ml-5 mt-5" id="text4">วัดพระเชตุพนวิมลมังคลาราม ราชวรมหาวิหาร หรือ วัดโพธิ์ท่าเตียน เป็นวัดประจำรัชกาลที่ 1
                  และเปรียบเสมือนเป็นมหาวิทยาลัยแห่งแรกของประเทศไทย เนื่องจากเป็นที่รวมจารึกสรรพวิชา
                  หลายแขนงนอกจากนี้ทางยูเนสโกได้ขึ้นทะเบียนเป็นมรดกความทรงจำโลกของภูมิภาคเอเชีย
                  แปซิฟิก เมื่อ มีนาคม พ.ศ. 2551 อีกด้วย
                </li>
              </div>
              <div className=" col-4 d-inline-block ml-auto mr-auto">
                <li className="text-center">
                  <div style={{fontSize: 30+'px'}} className="mb-2">CONTACT</div>
                  <div id="text4" className="mb-3">
                    <p> 02-226-0035 </p>
                    <p> http://www.watpho.com/ </p>
                  </div>
                </li>
                <li className="text-center">
                  <div style={{fontSize: 30+'px'}} className="mb-2">HOURS</div>
                  <div id="text4" className="mb-5">
                    <p> ทุกวัน 8.30 - 18.00 น.</p>
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div name="map" className=" mb-5">
            <div className=" text-center mt-3 mb-3" style={{fontSize: 30+'px'}}>MAP</div>
            <div width="70%" className= "text-center" id="map1">นี่แผนที่ไงจำไม่ได้หรอ</div>
          </div>
        </div>
      );
    }
  }
}


export default Info;