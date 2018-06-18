import React from 'react';
import { Row, Input } from 'react-materialize';

const Modal = () => {
  return (
    <div id="signupModal" className="modal">
      <div className="modal-content">
        <div className='center-align'>
          <img src={'./media/logo_serverless_PDX.png'} alt={'ServerlessDays PDX logo'} className='responsive-img' />
          <div className='space-foot' />
          <h4>Tickets on sale soon!</h4>
          <div className='space-foot' />
        </div>
        <p>Please enter your email to be notified when tickets go on sale (we promise not to spam you).</p>
        <Row>
          <Input type="email" label="Email" s={12} validate='true' />
        </Row>
      </div>
      <div className="modal-footer">
        <button type='submit' onChange='' className="modal-close waves-effect waves-teal btn-flat">Sign up</button>
      </div>
    </div>
  )
}

export default Modal;
