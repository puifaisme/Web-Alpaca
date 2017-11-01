import About_d from './About_d'
import About_m from './About_m'
import React, { Component } from 'react'

class About extends Component {
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
        const isMobile = width <= 768;
        // the rest is the same...
        if (isMobile) {
            return (
                <About_m/>
            );
          } else {
            return (
            <About_d/> )
    }
    }
}

export default About