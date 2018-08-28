import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Sponsors extends Component {
  render () {
    return (
      <div className='container sponsors' id='top'>
        <div className='container'>
          <div className='center-align'>
            <h2>2018 Sponsors</h2>
            <div className='titleHR' />
          </div>
          <h3 className='center-align'>Headline Sponsors</h3>
          <Row className='valign-wrapper top-marg'>
            <Col s={12} l={4}>
              <a href='https://azure.microsoft.com/en-us/' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/MSAzure.png'} alt={'Microsoft Azure'} className='responsive-img' /></a>
            </Col>
            <Col s={12} l={4}>
              <a href='https://aws.amazon.com/' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/aws.png'} alt={'AWS'} className='responsive-img' /></a>
            </Col>
            <Col s={12} l={4}>
            </Col>
          </Row>
          <div className='small-space'></div>
          <h4 className='center-align'>Community Sponsors</h4>
          <Row className='valign-wrapper top-marg'>
            <Col s={12} l={4}>
            </Col>
            <Col s={12} l={4}>
              <a href='https://www.pulumi.com/' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/pulumi.png'} alt={'Pulumi'} className='responsive-img' /></a>
            </Col>
            <Col s={12} l={4}>
            </Col>
          </Row>
          <div className='small-space'></div>
          <h4 className='center-align'>Media Sponsors</h4>
          <Row className='valign-wrapper top-marg'>
            <Col s={12} l={4}>
            </Col>
            <Col s={12} l={4}>
              <a href='https://thenewstack.io/' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/thenewstack.png'} alt={'The New Stack'} className='responsive-img' /></a>
            </Col>
            <Col s={12} l={4}>
            </Col>
          </Row>
          <div className='divider' />
          <h3 className='center-align'>Sponsor ServerlessDays PDX</h3>
          <h4>Become a sponsor!</h4>
          <p>ServerlessDays is a community-focused, single-track, one-day event that moves away from the hype and focuses on the reality serverless-based solutions. It’s about fostering a community locally and helping all of us learn from each other as we embrace a new way of building applications.</p>
          <p>As a community event, ServerlessDays could not exist without sponsors. We are currently offering sponsorship packages for the Portland ServerlessDays event. Together we can create a unique and meaningful experience for our attendees.</p>
          <p>We’d love to have you as a sponsor! To become a sponsor or learn more, please contact <a href='mailto:portland@serverlessdays.io'>portland@serverlessdays.io</a></p>
          <div className='center-align'>
            <a className='btn-large top-marg' href={'./media/ServerlessDaysPDX_ prospectus_2018.pdf'} target='_blank' rel='noopener noreferrer' download>Sponsor Prospectus</a>
          </div>
          <div className='space-foot' />
        </div>
      </div>
    );
  }
}

export default Sponsors;
