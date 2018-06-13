import React, { Component } from 'react';
import '../scss/Projects.css';

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project">
          <img src="/assets/Portfolio site.jpg" />
          <h2>This Site</h2>
          <p>Created a responsive site that can be viewed on Computer, tablet, and mobile.</p>
          <br />
          <p>Created site with React, javascript, and nodejs.</p>
          <a class="https://github.com/dmsilver2/portfoliosite" href="">See Code Here</a>
        </div>
        <div className="project">
          <img src="/assets/photographer_site.jpg" />
          <h2><a href="http://www.williamnavasphoto.com">Photographer Site</a></h2>
          <p>Custom CMS management system and album / prints ordering system for clients.</p>
          <br />
          <p>Created Site with Laravel, Angular, PHP, Javascript, mySQL.</p>
          <a class="code-link" href="https://github.com/dmsilver2/williamnavasphoto">See Code Here</a>
        </div>
        <div className="project">
          <img src="/assets/site_unavailable.png" />
          <h2 href="https://github.com/dmsilver2/animalshelter">Animal Shelter Site</h2>
          <p>Created a animal shelter website with a admin backend with RESTful api.</p>
          <br />
          <p>Created with Laravel, PHP, Javascript, and mySQL</p>
          <a class="code-link" href="https://github.com/dmsilver2/animalshelter">See Code Here</a>
        </div>
      </div>
    );
  }
}

export default Projects;
