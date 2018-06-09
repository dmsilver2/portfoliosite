import React, { Component } from 'react';
import '../scss/Navigation.css';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      location: 0,
    };

  }

  render() {
    return (
      <div className="navigation-bar">
        <nav>
          <a href="#daniel">Daniel Silver</a>
          <a href="#projects" >Projects</a>
          <a href="#contact" >Contact</a>
        </nav>
      </div>
    );
  }
}

export default Navigation;
