import React from 'react';
import Signup from './Signup';

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
        <Signup />
      </div>
    </div>
  )
}

export default Modal;
