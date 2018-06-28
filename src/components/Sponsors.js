import React, { Component } from 'react';

class Sponsors extends Component {
  render () {
    return (
      <div className='container' id='top'>
        <div className='container'>
          <h2 className='center-align'>Sponsor ServerlessDays Portland</h2>
          <h4>Become a speaker!</h4>
          <p>If you are interested in serverless technology and have a story to tell, we would be very happy to give you the opportunity to speak in front of an audience eager to hear your tales.</p>
          <p>It doesn't matter if you're just starting out or if you are already an experienced, battle-hardened cloud guru. We want you to speak!</p>
          <p>We aim to make ServerlessDays Portland an inclusive conference welcoming speakers from diverse backgrounds.</p>
          <div className='center-align'>
            <a className='btn-large top-marg' href='https://www.papercall.io/serverlessdayspdx' target='_blank' rel='noopener noreferrer'>Submit your proposal</a>
          </div>
          <div className='space-foot' />
          <p>Want to find out who's speaking as soon as they're announced? Sign up for our <a data-target='signupModal' className='modal-trigger'>mailing list</a> to be notified.</p>
        </div>
      </div>
    );
  }
}

export default Sponsors;
