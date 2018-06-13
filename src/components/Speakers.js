import React, { Component } from 'react';

class Speakers extends Component {
  render () {
    return (
      <div className='container' id='cont-top'>
        <div className='container'>
          <h2 className='center-align'>Speakers coming soon!</h2>
          <h4>Become a speaker!</h4>
          <p>If you are interested in serverless technology and have a story to tell, we would be very happy to give you the opportunity to speak in front of an audience eager to hear your tales.</p>
          <p>It doesn't matter if you're just starting out or if you are already an experienced, battle-hardened cloud guru. We want you to speak!</p>
          <p>We aim to make ServerlessDays Portland an inclusive conference welcoming speakers from diverse backgrounds.</p>
          <div className='center-align'>
            <a className='btn-large top-marg' href='https://www.papercall.io/serverless-days-portland' target='_blank'>Submit your proposal</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;
