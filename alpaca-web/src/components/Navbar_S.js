import React, { Component } from 'react';
import '../css/bootstrap.css';
import Logo1 from '../img/logo1.png'
import Logo2 from '../img/logo2.png'
import Logo_Full from '../img/logo-full.png'
import Cross from '../img/cross.png'
import '../css/style.css'
import NavbarMenus from './NavbarMenus'

class Navbar_S extends Component{

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
          <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <a onClick={()=>this.toggleNav()} className="navbar-toggle collapsed" data-toggle="collapse"  aria-expanded="true">
                <button className="navbar-toggler js-offcanvas-trigger" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"  data-offcanvas-trigger="off-canvas">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </a>
              <a className="navbar-brand mr-auto ml-3" href="#"><img src={Logo1} width="25px" className="mr-sm-2 mr-2"/><img src={Logo2} width="190px" /></a>
              <div className="collapse navbar-collapse d-none" id="navbarCollapse">
                <NavbarMenus side={false}/>
              </div>
            </nav>
            <div className={`bg-overlay bg-overlay-${this.state.collapseNav ?`on`:`off`}`}>
            </div>
            
            <aside className={`sidebar js-offcanvas side-${this.state.collapseNav ? `on`:`off`}`}>
              <div className="bg-dark container-fluid sidebar-head">
                <div className="row">
                  <div className="col-10">
                    <img src={Logo_Full} className="img-fluid align-bottom"/>
                    {/* <span className="align-bottom w-100">lonely magnet</span> */}
                  </div>
                  <div className="col-2">
                    <img src={Cross} className="cross-icon" onClick={()=>this.closeNav()}/>
                  </div>
                </div>
              </div>
              <div className="sidebar-body">
                <NavbarMenus side={true}/>
              </div>
            </aside>
          </div>  
        );
    }
}


export default Navbar_S;