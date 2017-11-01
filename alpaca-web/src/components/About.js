import './../css/culture.css'
import './../css/bootstrap.css'
import run from './../static/picture/Run.png'
import fang from './../static/picture/Fang.jpg'
import pfluke from './../static/picture/PFluke.png'
import pbank from './../static/picture/PBank.jpg'
import Tu from './../static/picture/Tu.jpg'
import Gunt from './../static/picture/Gun.jpg'
import puifai from './../static/picture/Puifai.jpg'
import React, { Component } from 'react'

class About extends Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }
      
      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
    render () {
        const { width } = this.state;
        const isMobile = width <= 768;
        // the rest is the same...
        if (isMobile) {
            return (
              <div className="BG mar-t">
              <p className="margin-t1 t-color font-size font-opan line b-culture1">ABOUT</p>
                  <div className="col-1">
                  </div>
                      <img src={pfluke} width="35%" className="center border-img"/>
                      <div className="tx-cen"><p className="font-w font-tx2 font-opan pad-t">PACHARAPOL APITANAPAT</p>
                                              <p className="mar-t font-tx2 font-opan pad-t">FRONT-END</p></div>
                      <img src={pbank} width="35%" className="center border-img"/>
                      <div className="tx-cen"><p className="font-w font-tx2 font-opan pad-t">ATHIWAT CHOTIMANEEWATTHIKORN</p>
                                              <p className="mar-t font-tx2 font-opan pad-t">DESIGN</p></div>
                      <img src={run} width="35%" className="center border-img"/>
                      <div className="tx-cen"><p className="font-w font-tx2 font-opan pad-t">SARUN SUMETPANICH</p>
                                              <p className="mar-t font-tx2 font-opan pad-t">DESIGN</p></div>
                      <img src={Tu} width="35%" className="center border-img"/>
                      <div className="tx-cen"><p className="font-w font-tx2 font-opan pad-t">PATTHRAPORN PERMPOON</p>
                                              <p className="mar-t font-tx2 font-opan pad-t">INFRA</p></div>
                      <img src={fang} width="35%" className="center border-img"/>
                      <div className="tx-cen"><p className="font-w font-tx2 font-opan pad-t">PASUKREE KHODNARIN</p>
                                              <p className="mar-t font-tx2 font-opan pad-t">FRONT-END</p></div>
                      <img src={Gunt} width="35%" className="center border-img"/>
                      <div className="tx-cen"><p className="font-w font-tx2 font-opan pad-t">GUNT CHANMAS</p>
                                              <p className="mar-t font-tx2 font-opan pad-t">FRONT-END</p></div>
                      <img src={puifai} width="35%" className="center border-img"/>
                      <div className="tx-cen"><p className="font-w font-tx2 font-opan pad-t">CHONTICHA SAE-JIW</p>
                                              <p className="mar-t font-tx2 font-opan pad-t">FRONT-END</p></div>
                  <div className="col-1">
                  </div>
              </div>
            );
          } else {
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
          </div> )
    }
    }
}

export default About