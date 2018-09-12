import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Schedule extends Component {
  render () {
    return (
      <div className='container schedule' id='top'>
        <div className='center-align'>
          <h2><span className='hide-on-small-only'>Serverlessdays PDX </span>Schedule</h2>
          <div className='titleHR' />
        </div>
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>8:30 am</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/owl_mascot.png'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Breakfast & Coffee</h6>
            <h4>Doors open & breakfast</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>9:10 am</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Conference Start</h6>
            <h4>Opening remarks</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>9:20 am</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/octo_mascot.png'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Chase Douglas & Ian Scofield</h6>
            <h4>I can haz serverless? A real-world example of integrating serverless into existing infrastructure</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>9:45 am</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/speakers/kelsey.jpg'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Kelsey Hightower</h6>
            <h4>Going serverless with Google Cloud Functions</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>10:10 am</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/owl_mascot.png'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Snacks & Coffee</h6>
            <h4>Morning break</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>10:20 am</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/speakers/charity.jpg'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Charity Majors</h6>
            <h4>Observability (and responsibility) for serverless systems</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>10:50 am</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/speakers/chris.png'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Chris Munns</h6>
            <h4>Serverless and DevOps, from the AWS horse’s mouth</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>11:15 am</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/speakers/erica.jpg'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Erica Windisch</h6>
            <h4>Observability for better applications</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>11:45 am</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/owl_mascot.png'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Catered Lunch</h6>
            <h4>Lunch break</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>12:45 pm</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/speakers/eduardo.jpg'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Eduardo Laureano</h6>
            <h4>Enterprise challenges for broader serverless adoption</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>1:10 pm</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/speakers/nitzan.jpg'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Nitzan Shapira</h6>
            <h4>What we should all worry about when monitoring serverless applications</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>1:40 pm</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/speakers/will.jpg'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Will Plusnick</h6>
            <h4>Serverless: the missing manual</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>2:25 pm</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/owl_mascot.png'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Snacks & Coffee</h6>
            <h4>Afternoon break</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>2:40 pm</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/speakers/john.png'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>John Miller</h6>
            <h4>Serverless best practices</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>3:05 pm</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/speakers/toby.jpg'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Toby Fee</h6>
            <h4>Lambdas in the real world: serverless development as part of a team</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>3:30 pm</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/speakers/tal.jpg'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Tal Melamed</h6>
            <h4>Your apps have gone serverless. Has your security?</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>3:55 pm</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>Closing Remarks</h6>
            <h4>Conference wrap-up</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={3} m={2} l={2} className='center-align'>
            <h4>4:30 pm</h4>
          </Col>
          <Col s={1} m={2} l={2} className='center-align'>
            <img src={'./media/octo_mascot.png'} alt={'logo'} className='responsive-img circle hide-on-small-only' width='100'/>
          </Col>
          <Col s={8} l={8}>
            <h6>After Party</h6>
            <h4>Please join us for the after party in The Cleaners room located in Ace Hotel.</h4>
          </Col>
        </Row>
        <div className='divider' />
      </div>
    );
  }
}

export default Schedule;
