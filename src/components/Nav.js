import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {
  return (
    <div>
      <nav>
        <div className='nav-wrapper container'>
          <ul id='nav-mobile' className='left hide-on-med-and-down'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/location'>Location</NavLink></li>
            <li><NavLink to='/schedule'>Schedule</NavLink></li>
            <li><NavLink to='/workshops'>Workshops</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
