import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Scrollchor from 'react-scrollchor';
import { Footer } from 'react-materialize';

function Foot () {
  return (
    <footer>
      <Footer copyrights={
        <div>
          © 2018 Serverless Days Portland &nbsp;
          <a href="https://twitter.com/ServerlessPDX" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
      }
        links={
          <div>
            <div className='space-foot hide-on-med-and-down' />
            <ul className='left-align'>
              <li><a href='https://www.eventbrite.com/e/serverlessdays-pdx-tickets-47446178798' target='_blank' rel='noopener noreferrer'>Tickets</a></li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='grey-text text-lighten-3' to='/about'>About</Link></Scrollchor></li>
              <li><Link className='grey-text text-lighten-3' to='/location#venue'>Venue</Link></li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='grey-text text-lighten-3' to='/speakers'>Speakers</Link></Scrollchor></li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='grey-text text-lighten-3' to='/schedule'>Schedule</Link></Scrollchor></li>
              <li><Link className='grey-text text-lighten-3' to='/about#coc'>Code of Conduct</Link></li>
              <li><a href="https://twitter.com/ServerlessPDX" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#veryTop'>Back to top</Scrollchor></li>
            </ul>
          </div>
        }
        className='copyrights'
      >
        <div className='space-foot hide-on-med-and-down' />
        <div className='small-space hide-on-med-and-up' />
        <h5 className='white-text left-align normal'>ServerlessDays Portland</h5>
        <p className='grey-text text-lighten-4 left-align'>September 17, 2018 <br />Ellen Bye Studio at The Armory <br />128 NW 11th Ave <br />Portland, OR 97209</p>
        <p className='grey-text text-lighten-4 left-align'>ServerlessDays Portland is presented by <a href='https://www.stackery.io/' target='_blank' rel='noopener noreferrer'>Stackery</a> & <a href='https://fauna.com/' target='_blank' rel='noopener noreferrer'>Fauna</a>.</p>
      </Footer>
    </footer>
  );
}

export default Foot;
