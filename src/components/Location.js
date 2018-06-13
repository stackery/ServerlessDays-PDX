import React, { Component } from 'react';
import Map from './Map';

class Location extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <h2 className='center-align'>Join us in Portland!</h2>
          <p>ServerlessDays Portland will take place at the Armory in downtown Portland, Oregon.</p>
          <p>Portland Center Stage at The Armory <br />128 NW 11th Ave <br />Portland, OR 97209</p>
          <div className='small-space' />
        </div>
        <Map />
      </div>
    );
  }
}

export default Location;
