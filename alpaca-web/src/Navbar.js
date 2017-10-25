import React, { Component } from 'react';
import './bootstrap.css'

class Navbar extends Component{

    render(){
        return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand mr-auto ml-3" href="#">lonely magnet</a>

            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">DESTINATION</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">ABOUT</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Find your place" aria-label="Search" />
                <button className="btn my-2 my-sm-0 btn-dark btn-sm" type="submit">Search</button>
              </form>
            </div>
          </nav>
        );
    }
}


export default Navbar;