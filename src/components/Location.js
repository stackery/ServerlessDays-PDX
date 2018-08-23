import React, { Component } from 'react';
import Map from './Map';

class Location extends Component {
  render () {
    return (
      <div>
        <div className='container' id='top'>
          <div className='center-align'>
            <h2 className='center-align space'>Join us in Portland!</h2>
            <div className='titleHR' />
          </div>
        </div>
        <img src={'./media/pdx-skyline.jpg'} alt={'Portland Skyline'} className='full-img' />
        <div className='container'>
          <div className='container'>
            <h2 className='center-align' id='venue'>Venue</h2>
            <p>ServerlessDays Portland will take place at <a href='https://www.pcs.org/' target='_blank' rel='noopener noreferrer'>The Armory</a> in downtown Portland, Oregon.</p>
            <p>Ellen Bye Studio at The Armory <br />128 Northwest 11th Avenue <br />Portland, OR 97209</p>
            <div className='small-space' />
          </div>
        </div>
        <img src={'./media/armory.jpg'} alt={'The Armory'} className='full-img' />
        <div className='small-space' />
        <h2 className='center-align' id='map'>Map</h2>
        <div className='map-div'>
          <Map />
        </div>
      </div>
    );
  }
}

export default Location;
