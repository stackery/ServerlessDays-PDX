import React from 'react';
import { Footer } from 'react-materialize';

function Foot () {
  return (
    <footer>
      <Footer copyrights='© 2018 Serverless Days Portland'
        links={
          <ul>
            {/* add optional links here
              <li><a className='grey-text text-lighten-3 left-align' href='#!'>Link 1</a></li>
              <li><a className='grey-text text-lighten-3 left-align' href='#!'>Link 2</a></li>
              <li><a className='grey-text text-lighten-3 left-align' href='#!'>Link 3</a></li>
              <li><a className='grey-text text-lighten-3 left-align' href='#!'>Link 4</a></li>
            */}
          </ul>
        }
        className='copyrights'
      >
        <h5 className='white-text left-align'>Footer Content</h5>
        <p className='grey-text text-lighten-4 left-align'>Footer content will go here.</p>
      </Footer>
    </footer>
  );
}

export default Foot;
