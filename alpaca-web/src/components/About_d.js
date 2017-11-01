import React from 'react'
import './../css/culture.css'
import './../css/bootstrap.css'
import run from './../static/picture/Run.png'
import fang from './../static/picture/Fang.jpg'
import pfluke from './../static/picture/PFluke.png'
import pbank from './../static/picture/PBank.jpg'
import Tu from './../static/picture/Tu.jpg'
import Gunt from './../static/picture/Gun.jpg'
import puifai from './../static/picture/Puifai.jpg'

const About_d = () => {
    return (
    <div className="m-background">   
        <div className="BG margin-t1">
            <div>
            <p className="t-color font-size font-opan line b-culture1">ABOUT</p>
        <div className="container">  
          <div className="row">
            <div className="container">
                <div className="row ">
                  <div className="col-md-2"></div>
                    <div className="border1 col-12 col-md-3 center"><img src={pfluke} className="border-img img-fluid"/></div>
                    <div className="border1 col-12 col-md-3 center"><img src={pbank} className="border-img img-fluid"/></div>
                  <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <p className="font-w pad-l2 center font-opan font-tx pad-t">PATCHARAPOL APITANAPAT</p>
                    <p className="font-w pad-r2 center font-opan font-tx pad-t">ATHIWAT CHOTIMANEEWATTHIKORN</p>  
                </div>
                <div className="row">
                    <p className="pad-l3 center font-opan font-tx">FRONT-END</p>
                    <p className="pad-r3 center font-opan font-tx">DESIGN</p>  
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                    <div className="border1 col-12 col-md-3 center pad-t"><img src={run} className="border-img img-fluid"/></div>
                    <div className="border1 col-12 col-md-3 center pad-t"><img src={Tu} className="border-img img-fluid"/></div> 
                <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <p className="font-w pad-l2 center font-opan font-tx pad-t">SARUN SUMETPANICH</p>
                    <p className="font-w pad-r2 center font-opan font-tx pad-t">PATTHRAPORN PERMPOON</p>  
                </div>
                <div className="row">
                    <p className="center pad-l3 font-opan font-tx">DESIGN</p>
                    <p className="center pad-r3 font-opan font-tx">INFRA</p>  
                </div>
                <div className="row">
                    <div className="border1 col-12 col-md-3 center pad-t"><img src={fang} className="border-img img-fluid"/></div>
                    <div className="border1 col-12 col-md-3 center pad-t"><img src={Gunt} className="border-img img-fluid"/></div>
                    <div className="border1 col-12 col-md-3 center pad-t"><img src={puifai} className="border-img img-fluid"/></div>
                </div>
                <div className="row">
                    <p className="font-w center font-opan font-tx pad-t">PASUKREE KHODNARIN</p>
                    <p className="font-w center font-opan font-tx pad-t">GUNT CHANMAS</p>  
                    <p className="font-w center font-opan font-tx pad-t">CHONTICHA SAE-JIW</p>  
                </div>
                <div className="row">
                    <p className="center font-opan font-tx margin-v">FRONT-END</p>
                    <p className="center font-opan font-tx margin-v">FRONT-END</p>  
                    <p className="center font-opan font-tx margin-v">FRONT-END</p>  
                </div>
            </div>
          </div>
          </div>
          </div>
        </div>
    </div>
    )
}

export default About_d