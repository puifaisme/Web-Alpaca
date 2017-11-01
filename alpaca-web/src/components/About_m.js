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

const About_m = () => {
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
    )
}

export default About_m