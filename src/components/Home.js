import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import Map from './Map';

class Home extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <h2 className='center-align'>Something clever</h2>
          <Row>
            <div className='valign-wrapper'>
              <Col s={12} m={4} l={4} className='grid-example center-align top-marg'>
                <img src={'./media/unicorn_mascot.png'} alt={'ServerlessDays PDX logo'} className='responsive-img not-wide' />
                <h4 className='top-marg'>Workshops</h4>
                <p>Hone your cloud skills and build interesting applications in one or more of the serverless workshops being held one day prior to the conference.</p>
              </Col>
              <Col s={12} m={4} l={4} className='grid-example center-align top-marg'>
                <img src={'./media/anteater_mascot.png'} alt={'ServerlessDays PDX logo'} className='responsive-img not-wide' />
                <h4 className='top-marg'>Serverless for everyone</h4>
                <p>The single day, single track conference for everyone where real users showcase their solution to common problems using serverless platforms.</p>
              </Col>
              <Col s={12} m={4} l={4} className='grid-example center-align top-marg'>
                <img src={'./media/moth_mascot.png'} alt={'ServerlessDays PDX logo'} className='responsive-img not-wide' />
                <h4 className='top-marg'>Join the community</h4>
                <p>Whether you are a beginner or an expert, meet like minded people and build your network in the european cloud society.</p>
              </Col>
            </div>
          </Row>
          <div className='space' />
          <h2 className='center-align'>Call for papers</h2>
          <p>If you are interested in cloud technology and have a story to tell, we would be very happy to give you the opportunity to speak in front of an audience thirsty for your tales.</p>
          <p>It doesn't matter if you are just starting out or if you are already an experienced, battle-hardened cloud guru. We want you to speak!</p>
          <div className='center-align'>
            <button className='btn' href='https://www.papercall.io/serverless-days-portland'>Submit your proposal!</button>
          </div>
          <div className='space' />
          <h2 className='center-align'>Join us in Portland!</h2>
          <p>Serverless days will take place at Stackery's downtown office.</p>
          <p><em>More about Stackery here, and photos!</em></p>
          <div className='space' />
          <h2 className='center-align'>Location</h2>
        </div>
        <Map />
      </div>
    );
  }
}

export default Home;
