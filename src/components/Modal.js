import React from 'react';
import Signup from './Signup';

const Modal = () => {
  return (
    <div id='signupModal' className='modal'>
      <div className='modal-content'>
        <div className='center-align'>
          <img src={'./media/logo_serverless_PDX.png'} alt={'ServerlessDays PDX logo'} className='responsive-img' />
          <div className='space-foot' />
        </div>
        <Signup />
      </div>
    </div>
  )
}

export default Modal;
