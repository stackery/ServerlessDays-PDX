import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Speakers extends Component {
  render () {
    return (
      <div className='container' id='top'>
        <div className='container'>
          <h2 className='center-align'>2018 Speakers</h2>
          <Row>
            <Col s={12} l={12}>
              <h4 className='top-marg'>Charity Majors</h4>
              <h5 className='company'>Honeycomb.io</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Charity is a cofounder and engineer at Honeycomb.io, a startup that blends the speed of time series with the raw power of rich events to give you interactive, iterative debugging of complex systems. She has worked at companies like Facebook, Parse, and Linden Lab, as a systems engineer and engineering manager, but always seems to end up responsible for the databases too. She loves free speech, free software and a nice peaty single malt.</p>
              <p>Pronouns: she/her</p>
              <h5><a href='https://www.twitter.com/mipsytipsy' target='_blank' rel='noopener noreferrer'><i class="fab fa-twitter"></i></a><a href='https://www.linkedin.com/in/charity-majors-826b765/' target='_blank' rel='noopener noreferrer'><i class="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/charity.jpg'} alt={'Charity Majors'} className='responsive-img' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12}>
              <h4 className='top-marg'>Chris Munns</h4>
              <h5 className='company'>Amazon Web Services</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Chris Munns is a Senior Developer Advocate for Serverless Applications at Amazon Web Services based in New York City. Chris works with AWS's developer customers to understand how serverless technologies can drastically change the way they think abount building and running applications at potentially massive scale with minimal administration overhead. Prior to this role, Chris was the global Business Development Manager for DevOps at AWS, spent a few years as a Solutions Architect at AWS, and has held senior operations engineering posts at Etsy, Meetup, and other NYC-based startups. Chris has a Bachelor of Science in Applied Networking and System Administration from Rochester Institute of Technology.</p>
              <p>Pronouns: he/him</p> 
              <h5><a href='https://twitter.com/chrismunns' target='_blank' rel='noopener noreferrer'><i class="fab fa-twitter"></i></a><a href='https://www.linkedin.com/in/chrismunns/' target='_blank' rel='noopener noreferrer'><i class="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/chris.png'} alt={'Chris Munns'} className='responsive-img' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12}>
              <h4 className='top-marg'>Erica Windisch</h4>
              <h5 className='company'>IOpipe</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Erica is CTO & Founder at IOpipe where she is building tools to help developers of serverless applications iterate faster and support their applications in production. She is a former maintainer of Docker and OpenStack and has been building cloud, ops, and infrastructure tooling for over 15 years.</p>
              <p>Pronouns: she/her</p>
              <h5><a href='https://twitter.com/ewindisch' target='_blank' rel='noopener noreferrer'><i class="fab fa-twitter"></i></a><a href='https://www.linkedin.com/in/ewindisch/' target='_blank' rel='noopener noreferrer'><i class="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/erica.jpg'} alt={'Charity Majors'} className='responsive-img top-marg' />
            </Col>
          </Row>
          <div className='divider' />
          <div className='space-foot' />
          <h4 className='top-marg'>Become a speaker!</h4>
          <p>If you are interested in serverless technology and have a story to tell, we would be very happy to give you the opportunity to speak in front of an audience eager to hear your tales.</p>
          <p>It doesn't matter if you're just starting out or if you are already an experienced, battle-hardened cloud guru. We want you to speak!</p>
          <p>We aim to make ServerlessDays Portland an inclusive conference welcoming speakers from diverse backgrounds.</p>
          <h4>Schedule</h4>
          <ul>
            <li className='pull-left'>June 2018: Call for papers opens</li>
            <li className='pull-left'>July 20, 2018: Submission deadline</li>
            <li className='pull-left'>August 2018: Speakers announced</li>
          </ul>
          <div className='space-foot' />
          <p>Want to find out who's speaking as soon as they're announced? Sign up for our <a data-target='signupModal' className='modal-trigger'>mailing list</a> to be notified.</p>
        </div>
      </div>
    );
  }
}

export default Speakers;
