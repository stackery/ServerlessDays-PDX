import React from 'react';
import { Row, Input } from 'react-materialize';

const Modal = () => {
  return (
    <div id='signupModal' className='modal'>
      <div className='modal-content'>
        <div className='center-align'>
          <img src={'./media/logo_serverless_PDX.png'} alt={'ServerlessDays PDX logo'} className='responsive-img' />
          <div className='space-foot' />
          <h4>Tickets on sale soon!</h4>
          <div className='space-foot' />
        </div>
        <p>Please enter your email to be notified when tickets go on sale (we promise not to spam you).</p>
        <Row>
          <Input id='first-name' s={6} label='First Name' />
          <Input id='last-name' s={6} label='Last Name' />
          <Input id='email-input' type='email' label='Email' s={12} validate='true' required />
        </Row>
      </div>
      <div className='center-align'>
        <button type='submit' onChange='' className='modal-close waves-effect teal btn-large'>Sign up</button>
      </div>
    </div>
  )
}

export default Modal;
