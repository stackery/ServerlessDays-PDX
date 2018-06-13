import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <h2>Main page here!</h2>
        </div>
        <Map />
      </div>
    );
  }
}

export default Home;
