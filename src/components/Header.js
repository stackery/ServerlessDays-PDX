import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div>
        <header className='header grad-bg'>
          <img src={'./media/logo_serverless_PDX.png'} alt={'ServerlessDays PDX logo'} className='responsive-img' />
          <h2>One Day. One Track. One Community.</h2>
          <h4>Save The Date</h4>
          <a href='https://www.papercall.io/serverlessdayspdx' target='_blank' className='btn-large top-marg'>Propose a talk!</a>
          <h5 className='top-marg'>September 17, 2018 - Portland, Oregon</h5>
        </header>
      </div>
    );
  }
}

export default Header;
