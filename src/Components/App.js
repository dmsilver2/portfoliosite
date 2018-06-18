import React, { Component } from 'react';
import '../scss/App.css';
import Header from './Header';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      position: 0,
      screenWidth:0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));

    this.handleResize();
  }

  handleScroll(event) {
      let offset = event.srcElement.body.getBoundingClientRect().top;

      this.setState({
      position: offset,
      });
  }
  handleResize(event) {
    this.setState({
    screenWidth: window.innerWidth,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Projects offset={this.state.position} />
        <div className="clear-fix" />
        <Contact />
        <Navigation screenWidth={this.state.screenWidth} offset={this.state.position} />
        {/* <footer>Created by Daniel Silver</footer> */}
      </div>
    );
  }
}

export default App;
