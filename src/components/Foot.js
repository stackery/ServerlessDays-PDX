import React from 'react';
import { Footer } from 'react-materialize';

function Foot () {
  return (
    <footer>
      <Footer copyrights='© 2018 Serverless Days Portland'
        links={
          <ul>
            <li>Links can go here</li>
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
        <h5 className='white-text left-align normal'>Footer Content</h5>
        <p className='grey-text text-lighten-4 left-align'>Lorem ipsum dolor amet pinterest cardigan pork belly, cornhole listicle vape lumbersexual veniam excepteur ut. Voluptate unicorn health goth copper mug DIY tote bag gentrify ut. Ea pariatur mlkshk sartorial cred microdosing messenger bag food truck. Put a bird on it est photo booth nisi laborum letterpress, migas plaid gochujang cliche. Taxidermy pinterest plaid eiusmod.</p>
      </Footer>
    </footer>
  );
}

export default Foot;
