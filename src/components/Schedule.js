import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Schedule extends Component {
  render () {
    return (
      <div className='container' id='top'>
        <div className='center-align'>
          <h2>2018 Schedule</h2>
          <div className='titleHR' />
        </div>
        <Row>
          <Col s={2} l={2} className='center-align'>
            <h4>8:30 am</h4>
          </Col>
          <Col s={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle' width='100'/>
          </Col>
          <Col s={2} l={8}>
            <h6>Breakfast & Coffee</h6>
            <h4>Doors open & breakfast</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={2} l={2} className='center-align'>
            <h4>9:10 am</h4>
          </Col>
          <Col s={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle' width='100'/>
          </Col>
          <Col s={2} l={8}>
            <h6>Conference Start</h6>
            <h4>Opening remarks</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={2} l={2} className='center-align'>
            <h4>9:20 am</h4>
          </Col>
          <Col s={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle' width='100'/>
          </Col>
          <Col s={2} l={8}>
            <h6>Chase Douglas and Ian Scofield</h6>
            <h4>Doors Open & Breakfast</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={2} l={2} className='center-align'>
            <h4>9:45 am</h4>
          </Col>
          <Col s={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle' width='100'/>
          </Col>
          <Col s={2} l={8}>
            <h6>Nitzan Shapira</h6>
            <h4></h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={2} l={2} className='center-align'>
            <h4>10:10 am</h4>
          </Col>
          <Col s={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle' width='100'/>
          </Col>
          <Col s={2} l={8}>
            <h6>Snacks & Coffee</h6>
            <h4>Morning Break</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={2} l={2} className='center-align'>
            <h4>10:20 am</h4>
          </Col>
          <Col s={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle' width='100'/>
          </Col>
          <Col s={2} l={8}>
            <h6>Charity Majors</h6>
            <h4></h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={2} l={2} className='center-align'>
            <h4>10:50 am</h4>
          </Col>
          <Col s={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle' width='100'/>
          </Col>
          <Col s={2} l={8}>
            <h6>Chris Munns</h6>
            <h4></h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={2} l={2} className='center-align'>
            <h4>11:15 am</h4>
          </Col>
          <Col s={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle' width='100'/>
          </Col>
          <Col s={2} l={8}>
            <h6>Erica Windisch</h6>
            <h4></h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={2} l={2} className='center-align'>
            <h4>11:45 am</h4>
          </Col>
          <Col s={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle' width='100'/>
          </Col>
          <Col s={2} l={8}>
            <h6>Lunch</h6>
            <h4>Lunch Break</h4>
          </Col>
        </Row>
        <div className='divider' />
        <Row>
          <Col s={2} l={2} className='center-align'>
            <h4>12:45 am</h4>
          </Col>
          <Col s={2} l={2} className='center-align'>
            <img src={'./media/unicorn_mascot.png'} alt={'logo'} className='responsive-img circle' width='100'/>
          </Col>
          <Col s={2} l={8}>
            <h6>Eduardo Laureano</h6>
            <h4></h4>
          </Col>
        </Row>
        <div className='divider' />

      </div>
    );
  }
}

export default Schedule;
