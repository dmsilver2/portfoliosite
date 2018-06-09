import React, { Component } from 'react';
import '../scss/Header.css';

class Header extends Component {
  render() {
    return (
      <div id="daniel" className="App-header">
        <div>
          <h1>Hey,</h1>
          <h1>I'm <span>Daniel Silver</span>,</h1>
          <h1>web developer.</h1>
          <h2>Full Stack</h2>
          <h2>Javascript, React, Nodejs, PHP, Laravel, sql, html, css</h2>
        </div>
      </div>
    );
  }
}

export default Header;
