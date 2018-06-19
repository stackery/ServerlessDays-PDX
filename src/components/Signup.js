import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

class Signup extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    // NOTE: you access FormData fields with `data.get(fieldName)` 
    console.log(data.get('first_name'));
    console.log(data.get('last_name'));
    console.log(data.get('email_input'));
    
    fetch('/api/signup', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Input id='first_name' name='first_name' s={6} label='First Name' />
            <Input id='last_name' name='last_name' s={6} label='Last Name' />
            <Input id='email_input' name='email_input' type='email' label='Email (required)' s={12} validate={true} required />
          </Row>
          <div className='center-align'>
            <button type='submit' className='waves-effect teal btn-large'>Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;

// TODO: make component with modal-close className upon success!