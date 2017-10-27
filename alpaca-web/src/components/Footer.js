import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/style.css'
import Logo1 from '../img/logo1.png'
import Logo2 from '../img/logo2.png'

class Footer extends Component{
    
        render(){
            return(
                <div>
                    <div className=" navbar-dark bg-dark" id="footer1">
                        <ul className="navbar-nav d-block ml-auto mr-auto text-center">
                            <li id="logo"><img src={Logo1} width="25px" className="mr-sm-2 mr-2"/><img src={Logo2} width="190px" /></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">DESTINATION</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="subTopic" href="#">Cultural<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="subTopic" href="#">Natural</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="subTopic" href="#">Historical</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="subTopic" href="#">Lifestyle</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
    }
    
    
    export default Footer;