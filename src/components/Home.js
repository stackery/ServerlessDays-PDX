import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import { HashLink as Link } from 'react-router-hash-link';
import Scrollchor from 'react-scrollchor';
import ScrollableAnchor from 'react-scrollable-anchor';
import Map from './Map';

class Home extends Component {
  render () {
    return (
      <div>
        <div className='container' id='top'>
          <Row><h6 className='center-align'>Presented by:</h6></Row>
          <Row className='valign-wrapper'>
            <Col s={2} l={4} />
            <Col s={4} l={2}><a href='https://www.stackery.io/' target='_blank' rel='noopener noreferrer'><img src={'./media/stackery-large-stacked-navy-w-01.svg'} alt={'Stackery logo'} className='responsive-img' /></a></Col>
            <Col s={4} l={2}><a href='https://fauna.com/' target='_blank' rel='noopener noreferrer'><img src={'./media/Fauna-logo-color.svg'} alt={'Fauna logo'} className='responsive-img' /></a></Col>
            <Col s={2} l={4} />
          </Row>
          <ScrollableAnchor id={'home'}>
            <div className='center-align'>
              <h2 className='center-align shrinkme'>ServerlessDays in PDX</h2>
              <div className='titleHR' />
            </div>
          </ScrollableAnchor>
          <Row>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'./media/unicorn_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Real world solutions</h4>
              <p>Hone your cloud skills and learn the power of serverless during the conference dedicated to the serverless development community.</p>
            </Col>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'./media/anteater_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Serverless for everyone</h4>
              <p>The single day, single track conference for everyone where real users showcase their solution to common problems using serverless platforms.</p>
            </Col>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'./media/moth_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Join the community</h4>
              <p>Whether you are a beginner or an expert, meet like minded-people and build your network in the global cloud society.</p>
            </Col>
          </Row>
          <div className='space' />
          <div className='container speaker-pics'>
            <h2 className='center-align'>2018 Speakers</h2>
            <Row>
              <Col s={4} l={4} className='center-align'>
                <img src={'./media/speakers/chase.jpg'} alt={'Chase Douglas'} className='responsive-img circle' />
                <h5>Chase Douglas</h5>
                <p>Stackery</p>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <img src={'./media/speakers/kelsey.jpg'} alt={'Kelsey Hightower'} className='responsive-img circle' />
                <h5>Kelsey Hightower</h5>
                <p>Google</p>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <img src={'./media/speakers/toby.jpg'} alt={'Toby Fee'} className='responsive-img circle' />
                <h5>Toby Fee</h5>
                <p>Stackery</p>
              </Col>
            </Row>
            <Row>
              <Col s={4} l={4} className='center-align'>
                <img src={'./media/speakers/eduardo.jpg'} alt={'Eduardo Laureano'} className='responsive-img circle' />
                <h5>Eduardo Laureano</h5>
                <p>Microsoft</p>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <img src={'./media/speakers/charity.jpg'} alt={'Charity Majors'} className='responsive-img circle' />
                <h5>Charity Majors</h5>
                <p>Honeycomb.io</p>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <img src={'./media/speakers/chris.png'} alt={'Chris Munns'} className='responsive-img circle' />
                <h5>Chris Munns</h5>
                <p>Amazon Web Services</p>
              </Col>
            </Row>
            <Row>
              <Col s={4} l={4} className='center-align'>
                <img src={'./media/speakers/will.jpg'} alt={'Will Plusnick'} className='responsive-img circle' />
                <h5>Will Plusnick</h5>
                <p>IBM</p>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <img src={'./media/speakers/nitzan.jpg'} alt={'Nitzan Shapira'} className='responsive-img circle' />
                <h5>Nitzan Shapira</h5>
                <p>Epsagon</p>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <img src={'./media/speakers/erica.jpg'} alt={'Erica Windisch'} className='responsive-img circle' />
                <h5>Erica Windisch</h5>
                <p>IOpipe</p>
              </Col>
            </Row>
            <div className='center-align'>
              <Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='btn-large top-marg' to='/speakers'>View Speakers</Link></Scrollchor>
            </div>
          </div>
          <div className='space' />
          <div className='container'>
            <h2 className='center-align'>Join us in Portland!</h2>
            <p>ServerlessDays Portland will take place at <a href='https://www.pcs.org/' target='_blank' rel='noopener noreferrer'>The Armory</a> in downtown Portland on Monday, September 17, 2018.</p>
            <p>Ellen Bye Studio at The Armory <br />128 Northwest 11th Avenue <br />Portland, OR 97209</p>
            <div className='space' />
          </div>
        </div>
        <div className='map-div'>
          <Map />
        </div>
      </div>
    );
  }
}

export default Home;
