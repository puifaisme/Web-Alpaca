import React from 'react'
import pic1 from './../static/picture/Pic1.png'
import pic2 from './../static/picture/Pic2.png'
import pic3 from './../static/picture/Pic3.png'
import pic4 from './../static/picture/Pic4.png'
import '../css/bootstrap.css'
import '../css/destination.css'

const Destination = () => {

    return (
        <div className="f">
            {/* container */}
            <p className="t-color font-opan font-size-cyd text-center">CHOOSE YOUR DESTINATION</p>
            <hr width="20%" size="100%" color="orange"></hr>
            <div className="container-fluid">
                <div className="row b-image">
                    <div className="col-6 col-md-8">
                    </div>
                    <div className="col-6 col-md-4">
                        <p className="f-topic font-opan">Cultural</p>
                        <a href="" className="choose-button font-opan">
                            CHOOSE THIS
                        </a>
                    </div>
                </div>

                <div className="row b-image2">
                    <div className="col-6 col-md-8">
                    </div>
                    <div className="col-6 col-md-4">
                        <p className="f-topic font-opan">Historical</p>
                        <a href="" className="choose-button">
                            CHOOSE THIS
                        </a>
                    </div>
                </div>

                <div className="row b-image3">
                    <div className="col-6 col-md-8">
                    </div>
                    <div className="col-6 col-md-4">
                        <p className="f-topic font-opan">Lifestyle</p>
                        <a href="" className="choose-button">
                            CHOOSE THIS
                        </a>
                    </div>
                </div>

                <div className="row b-image4">
                    <div className="col-6 col-md-8">
                    </div>
                    <div className="col-6 col-md-4">
                        <p className="f-topic font-opan">Natural</p>
                        <a href="" className="choose-button">
                            CHOOSE THIS
                        </a>
                    </div>
                </div>
                
            </div>
            {/* <img src={pic1} width="100%" className="center"/>
            <img src={pic2} width="100%" className="center"/>
            <img src={pic3} width="100%" className="center"/>
            <img src={pic4} width="100%" className="center"/> */}
        </div>
        



    )
}

export default Destination