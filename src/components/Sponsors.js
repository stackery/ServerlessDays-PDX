import React, { Component } from 'react';

class Sponsors extends Component {
  render () {
    return (
      <div className='container' id='top'>
        <div className='container'>
          <h2 className='center-align'>Sponsor ServerlessDays Portland</h2>
          <h4>Become a sponsor!</h4>
          <p>ServerlessDays is a community-focused, single-track, one-day event that moves away from the hype and focuses on the reality serverless-based solutions. It’s about fostering a community locally and helping all of us learn from each other as we embrace a new way of building applications.</p>
          <p>As a community event, ServerlessDays could not exist without sponsors. We are currently offering sponsorship packages for the Portland ServerlessDays event. Together we can create a unique and meaningful experience for our attendees.</p>
          <p>We’d love to have you as a sponsor! To become a sponsor or learn more, please contact <a href='mailto:portland@serverlessdays.io'>portland@serverlessdays.io</a></p>
          <div className='center-align'>
            <a className='btn-large top-marg' href={'./media/ServerlessDaysPDX_ prospectus_2018.pdf'} target='_blank' rel='noopener noreferrer'>Sponsor Prospectus</a>
          </div>
          <div className='space-foot' />
        </div>
      </div>
    );
  }
}

export default Sponsors;
