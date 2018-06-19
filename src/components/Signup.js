import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      posted: false,
      p_message: 'Please enter your email to be notified when tickets go on sale (we promise not to spam you).'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
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

    // if success, update p_message
    this.setState({
      posted: true,
      p_message: "Thanks for signing up, we'll let you know as soon as tickets go on sale!"
    });
  }

  render() {
    return (
      <div>
        <h4 className='center-align'>Tickets on sale soon!</h4>
        <div className='space-foot' />
        <p>{this.state.p_message}</p>
        {/* only show form if form hasn't been submitted */}
        {!this.state.posted &&
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
        }
        {/* only show after successful submit */}
        {this.state.posted &&
          <div className='center-align'>
            <button className='modal-close waves-effect teal btn-large'>Awesome!</button>
          </div>
        }
      </div>
    );
  }
}

export default Signup;
