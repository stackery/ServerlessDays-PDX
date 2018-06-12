import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <h1>Main page here!</h1>
        </div>
        <Map />
      </div>
    );
  }
}

export default Home;
