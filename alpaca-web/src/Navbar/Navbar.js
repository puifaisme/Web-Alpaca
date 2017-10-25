import React, { Component } from 'react';
import '../bootstrap.css';
import Logo1 from './lonely magnet-white.png';
import Logo2 from './LOGO--W.png'

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

    render(){
        return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

              <button onClick={ () => this.toggleNav() } className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand mr-auto ml-3" href="#"><img src={Logo2} width="25px" className="mr-sm-2 mr-2"/><img src={Logo1} width="190px" /></a>

            <div className={`collapse navbar-collapse ${this.state.collapseNav ? 'show':''}`} id="navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a onClick={() => this.closeNav()} className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.closeNav()} className="nav-link" href="#">DESTINATION</a>
                </li>
                <li className="nav-item">
                  <a onClick={() => this.closeNav()} className="nav-link" href="#">ABOUT</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2 col-md-10 col-lg-auto" type="search" placeholder="Find your place" aria-label="Search" />
                <button className="btn my-2 my-sm-0 btn-dark btn-sm" type="submit">Search</button>
              </form>
            </div>
          </nav>
        );
    }
}


export default Navbar;