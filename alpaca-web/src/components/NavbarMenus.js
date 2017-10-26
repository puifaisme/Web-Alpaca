import React, { Component } from 'react';

class NavbarMenus extends Component{

    constructor(props) {
      super(props)
    }

    render(){
        return(
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a onClick={() => this.closeNav()} className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className={`nav-link ${this.props.side ?'':'dropdown-toggle'}`} id="navbarDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DESTINATION</a>
              <div className={`${this.props.side ?'':"dropdown-menu"}`} aria-labelledby="navbarDropdown">
                  <a onClick={() => this.closeNav()} className="dropdown-item" href="#">Cultural</a>
                  <a onClick={() => this.closeNav()} className="dropdown-item" href="#">Natural</a>
                  <a onClick={() => this.closeNav()} className="dropdown-item" href="#">Historical</a>
                  <a onClick={() => this.closeNav()} className="dropdown-item" href="#">Lifestyle</a>
              </div>
            </li>
            <li className="nav-item">
              <a onClick={() => this.closeNav()} className="nav-link" href="#">ABOUT</a>
            </li>
          </ul>
        );
    }
}


export default NavbarMenus;