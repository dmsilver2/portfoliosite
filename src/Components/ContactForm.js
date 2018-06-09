import React, { Component } from 'react';
import '../scss/ContactForm.css';
import MessageStatus from './MessageStatus';
import validateInput from '../server/shared/validations/Contact';
import TextFieldGroup from './TextFieldGroup';
import TextBoxGroup from './TextBoxGroup';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      sending: false,
      sent: false,
      errors: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(){
    let self = this;
    let options = {
      method: "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
    })};

    if(this.isValid())
    {
      this.setState(prevState => ({
        sending: true,
        errors: {}
      }));
      fetch("/api/send", options)
        .then(self.checkStatus)
        .then(() =>  {
          self.setState(prevState => ({
            name: "",
            email: "",
            phone: "",
            message: "",
            sending: false,
            sent: true,
            errors: {}
          }))})
        .catch(function(err){
          self.setState(prevState => ({
            sending: false,
            sent: false,
            errors: {fetch: "An Error Occured on Server.  Please try again later."}
        }))})
      }
  }

  checkStatus(response) {
    if(response.status===200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  isValid(){
    const { errors, isValid } = validateInput(this.state);

    if(!isValid)
      this.setState({ errors });

    return isValid;
  }

  render(){
    // let errorMessage = this.state.errorMessage && <ErrorMessage message={this.state.errorMessage} />;

    return (
      <div>
        <MessageStatus sending={this.state.sending} sending={this.state.sending} sent={this.state.sent} error={this.state.errors.fetch}/>
        <form>
          <TextFieldGroup
            error={this.state.errors.name}
            label="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
            field="name"
          />

          <TextFieldGroup
            error={this.state.errors.email}
            label="Email"
            onChange={this.handleInputChange}
            value={this.state.email}
            field="email"
          />
          <TextFieldGroup
            error={this.state.errors.phone}
            label="Phone Number (optional)"
            onChange={this.handleInputChange}
            value={this.state.phone}
            field="phone"
          />
          <TextBoxGroup
            error={this.state.errors.message}
            label="Message"
            onChange={this.handleInputChange}
            value={this.state.message}
            field="message"
          />
          <div className="form-group"><input id="submitButton" type="button" value="Send" onClick={this.onSubmit} /></div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
