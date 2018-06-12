import React from 'react';
import { NavLink } from 'react-router-dom';

// TODO: mobile nav

function Nav () {
  return (
    <div className='navbar-fixed'>
      <nav className='grad-bg'>
        <div className='nav-wrapper container'>
          <a href='#' data-target='mobile-demo' class='sidenav-trigger'><i class='material-icons'>menu</i></a>
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
