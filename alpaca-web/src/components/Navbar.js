import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/animate.css';
import '../css/style.css';
import Logo1 from '../img/logo1.png';
import Logo2 from '../img/logo2.png';

class Navbar extends Component{

    constructor(props) {
      super(props)
      this.state = {
       collapseNav: false
      }
      this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
      this.setState({ collapseNav: !this.state.collapseNav })
    }

    closeNav() {
      this.setState({ collapseNav: false })
    }

    addClass() {
        document.getElementById('navAnimated').className += "slideInDown";
        document.getElementById('navAnimated').className = "navbar-toggler";
    }

    render(){
        return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar1">
            <div className="container">
              <button onClick={ () => this.toggleNav() } onClick={ () => this.addClass() } className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" id="navAnimated">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand mr-auto ml-3" href="#"><img src={Logo1} width="25px" className="mr-sm-2 mr-2"/><img src={Logo2} width="190px" /></a>

            <div className={`collapse navbar-collapse ${this.state.collapseNav ? 'show':''}`} id="navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a onClick={() => this.closeNav()} className="nav-link" href="#" activeclass="active">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.closeNav()} className="nav-link" href="#" activeclass="active">DESTINATION</a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.closeNav()} className="nav-link" href="#" activeclass="active">ABOUT</a>
                </li>
              </ul>
              <div className="mr-3">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2 col-md-10 col-lg-auto" type="search" placeholder="Find your place" aria-label="Search" />
                <button className="btn my-2 my-sm-0 btn-dark btn-sm" type="submit">Search</button>
              </form>
              </div>
            </div>
            </div>
          </nav>
        );
    }
}


export default Navbar;