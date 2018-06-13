import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Footer } from 'react-materialize';

function Foot () {
  return (
    <footer>
      <Footer copyrights='© 2018 Serverless Days Portland'
        links={
          <ul className='left-align'>
            <li><Link className='grey-text text-lighten-3' to='/tickets'>Tickets</Link></li>
            <li><HashLink className='grey-text text-lighten-3' to='/location#venue'>Venue</HashLink></li>
            <li><Link className='grey-text text-lighten-3' to='/speakers'>Speakers</Link></li>
            <li><Link className='grey-text text-lighten-3' to='/schedule'>Schedule</Link></li>
            <li><Link className='grey-text text-lighten-3' to='/workshops'>Workshops</Link></li>
            <li><HashLink className='grey-text text-lighten-3' to='/about#coc'>Code of Conduct</HashLink></li>
          </ul>
        }
        className='copyrights'
      >
        <h5 className='white-text left-align normal'>ServerlessDays Portland</h5>
        <p className='grey-text text-lighten-4 left-align'>September 17, 2018 <br />Portland Center Stage at The Armory <br />128 NW 11th Ave <br />Portland, OR 97209</p>
        <p className='grey-text text-lighten-4 left-align'>ServerlessDays Portland is presented in cooperation with <a href='https://www.stackery.io/' target='_blank'>Stackery</a>.</p>
      </Footer>
    </footer>
  );
}

export default Foot;
