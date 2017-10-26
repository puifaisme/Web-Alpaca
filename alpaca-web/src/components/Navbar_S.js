import React, { Component } from 'react';
import '../css/bootstrap.css';
import Logo1 from '../img/logo1.png'
import Logo2 from '../img/logo2.png'
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
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
              <a className="navbar-brand" href="#">Off Canvas Navbar</a>
              <a onClick={()=>this.toggleNav()} className="navbar-toggle collapsed" data-toggle="collapse"  aria-expanded="true">
                <button className="navbar-toggler js-offcanvas-trigger" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"  data-offcanvas-trigger="off-canvas">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </a>
              <div className="collapse navbar-collapse d-none" id="navbarCollapse">
                <NavbarMenus/>
              </div>
            </nav>
            <div class={`bg-overlay bg-overlay-${this.state.collapseNav ?`on`:`off`}`}>
            </div>
            
            <aside className={`sidebar js-offcanvas side-${this.state.collapseNav ? `on`:`off`}`}>
              <button onClick={()=>this.closeNav()}>X</button>
              <NavbarMenus/>
            </aside>
          </div>  
        );
    }
}


export default Navbar_S;