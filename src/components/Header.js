import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div>
        <header className='header grad-bg'>
          <img src='../../build/static/media/logo_serverless_PDX.png' alt='ServerlessDays PDX logo' />
          <h2>One Day. One Track. One Community.</h2>
          <h4>Save The Date</h4>
          <button className='btn'>I call you to action!</button>
          <p>More information coming soon!</p>
        </header>
      </div>
    );
  }
}

export default Header;
