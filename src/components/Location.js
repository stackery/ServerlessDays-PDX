import React, { Component } from 'react';
import Map from './Map';

class Location extends Component {
  render () {
    return (
      <div>
        <div className='container' id='top'>
          <h2 className='center-align'>Join us in Portland!</h2>
        </div>
        <img src={'./media/pdx-skyline.jpg'} alt={'Portland Skyline'} className='full-img' />
        <div className='container'>
          <div className='container'>
            <h2 className='center-align' id='venue'>Venue</h2>
            <p>ServerlessDays Portland will take place at <a href='https://www.pcs.org/' target='_blank'>The Armory</a> in downtown Portland, Oregon.</p>
            <p>Portland Center Stage at The Armory <br />128 NW 11th Ave <br />Portland, OR 97209</p>
            <div className='small-space' />
          </div>
        </div>
        <img src={'./media/armory.jpg'} alt={'The Armory'} className='full-img' />
        <div className='small-space' />
        <h2 className='center-align' id='map'>Map</h2>
        <Map />
      </div>
    );
  }
}

export default Location;
