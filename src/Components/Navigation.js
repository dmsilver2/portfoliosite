import React, { Component } from 'react';
import '../scss/Navigation.css';

class Navigation extends Component {
  constructor() {
    super();
  }

  //Added Scroll and Resize events because when the nav bar is in fixed position,
  //the bar is fixed relative to the viewport rather then the parent div container.
  //Had to dinamically change the width.
  componentDidMount() {
    this.navBar = document.getElementById("navBar");
    this.navBarParent = this.navBar.parentElement;

    window.addEventListener('scroll', this.handleResizeScroll.bind(this));
    window.addEventListener('resize', this.handleResizeScroll.bind(this));
    this.handleResizeScroll();
  }

  handleResizeScroll(event) {
    this.navBar.style.width = this.navBarParent.offsetWidth +"px";
  }

  render() {
    let navClass = "navigation-bar";

    if(this.props.offset<-605 && this.props.screenWidth>768)
      navClass+=" navigation-sticky";

    return (
      <div className={navClass} id="navBar">
        <nav>
          <a href="#daniel">Daniel Silver</a>
          <a href="#projects" >Projects</a>
          <a className="no-right-border" href="#contact" >Contact</a>
        </nav>
      </div>
    );
  }
}

export default Navigation;
