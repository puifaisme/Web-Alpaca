import Footer_d from './Footer_d'
import Footer_m from './Footer_m'
import React, { Component } from 'react'

class Footer extends Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }
      
      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
    render () {
        const { width } = this.state;
        const isMobile = width <= 500;
        // the rest is the same...
        if (isMobile) {
            return (
                <Footer_m/>
            );
          } else {
            return (
            <Footer_d/> )
    }
    }
}

export default Footer