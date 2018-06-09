import React, { Component } from 'react';
import '../scss/App.css';
import Header from './Header';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <div className="clear-fix" />
        <Contact />
        <Navigation />
        {/* <footer>Created by Daniel Silver</footer> */}
      </div>
    );
  }
}

export default App;
