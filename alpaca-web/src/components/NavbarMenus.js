import React, { Component } from 'react';

class NavbarMenus extends Component{

    constructor(props) {
      super(props)
    }

    render(){
        return(
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        );
    }
}


export default NavbarMenus;