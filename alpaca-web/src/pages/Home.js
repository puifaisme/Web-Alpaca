import React from 'react';
import '../css/style.css';
import '../css/bootstrap.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import homeimg1 from '../img/home_img1.jpg';
import homeimg2 from '../img/home_img2.jpg';
import homeimg3 from '../img/home_img3.jpg';
import mapimg1 from '../img/map_img1.png';
import mapimg2 from '../img/map_img2.png';

class Home extends React.Component {

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
            <div name="home" className="">
                <Navbar />
                <div id="carousel1" className="carousel" data-ride="carousel" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block" src={homeimg1} id="homeimg1" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block" src={homeimg2} id="homeimg1" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block" src={homeimg3} id="homeimg1" alt="Third slide" />
                        </div>
                    </div>
                </div>
                <div id="body1">
                    <div className="container">
                        <div className="text-center mb-1 mt-1">
                            <br />
                            <button className="btn btn-light btn-lg col-lg-3 col-4" type="submit">
                                START
                            </button>
                        </div>
                        <br />
                        <div className="col-12"> 
                            <img src={mapimg1} className="col-3" id="homeimg2" />
                            <div id="text1">JOURNEY</div>
                            <div className="container">                            
                                <p>ด้วย lonely magnet ทำให้คุณสามารถหาที่เที่ยวได้ตรงใจและตรงประเภทที่คุณอยากจะไปทั่วกรุงเทพมหานคร</p>
                            </div>
                            <img src={mapimg2} className="col-3" id="homeimg2" />
                            <div id="text1">GUIDE</div>
                            <div className="container">
                                <p>lonely magnet ช่วยให้คุณพบกับแหล่งเที่ยวที่น่าสนใจพร้อมแผนที่ตำแหน่งและข้อมูล</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossOrigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossOrigin="anonymous"></script>
                </div>
                <Footer />
            </div>
          )
      }

      else {
          return (
            <div name="home" className="">
                <Navbar />
                <div id="carousel1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block" src={homeimg1} id="homeimg1" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block" src={homeimg2} id="homeimg1" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block" src={homeimg3} id="homeimg1" alt="Third slide" />
                        </div>
                    </div>
                </div>
                <div id="body1">
                    <div className="container">
                        <div className="text-center mb-1 mt-1">
                            <br />
                            <button className="btn btn-light btn-lg col-lg-3 col-4" type="submit">
                                START
                            </button>
                        </div>
                        <br />
                        <div className="col-12 text-center mb-3">
                            <div className="col-4 d-inline-block"> 
                                <img src={mapimg1} className="col-3" id="homeimg2" />
                                <div id="text1">JOURNEY</div>
                                <div className="container">                            
                                    <p>ด้วย lonely magnet ทำให้คุณสามารถหาที่เที่ยวได้ตรงใจและตรงประเภทที่คุณอยากจะไปทั่วกรุงเทพมหานคร</p>
                                </div>
                            </div>
                            <div className="col-4 d-inline-block">
                                <img src={mapimg2} className="col-3" id="homeimg2" />
                                <div id="text1">GUIDE</div>
                                <div className="container">
                                    <p>lonely magnet ช่วยให้คุณพบกับแหล่งเที่ยวที่น่าสนใจพร้อมแผนที่ตำแหน่งและข้อมูล</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossOrigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossOrigin="anonymous"></script>
                </div>
                <Footer />
            </div>
          )
      }
    }
  }
  
  export default Home;