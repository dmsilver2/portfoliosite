import React, { Component } from 'react';
import '../scss/Contact.css';
import ContactForm from './ContactForm';

class Contact extends Component {

  render() {

    return (
      <div id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
