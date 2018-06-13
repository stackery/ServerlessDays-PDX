import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// TODO: mobile nav

class Nav extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 70;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll (isTop) {
    this.setState({ isTop });
  }

  render () {
    return (
      <div id='navbar-custom' className='navbar-fixed'>
        <nav className={this.state.isTop ? 'trans transparent z-depth-0' : 'trans white z-depth-1 purp-text'}>
          <div className='nav-wrapper container'>
            <a href='#' class='right tickets-btn'><span className='tickets-txt valign-wrapper'>Tickets</span></a>
            <a href='/' data-target='mobile-demo' className={this.state.isTop ? 'hide-on-med-and-up' : 'hide-on-med-and-up purp-text'}><i class='material-icons'>home</i></a>
            <ul id='nav-mobile' className='left hide-on-med-and-down'>
              <li><NavLink to='/' className={this.state.isTop ? 'bold' : 'purp-text'}>Home</NavLink></li>
              <li><NavLink to='/about' className={this.state.isTop ? 'bold' : 'purp-text'}>About</NavLink></li>
              <li><NavLink to='/location' className={this.state.isTop ? 'bold' : 'purp-text'}>Location</NavLink></li>
              <li><NavLink to='/speakers' className={this.state.isTop ? 'bold' : 'purp-text'}>Speakers</NavLink></li>
              <li><NavLink to='/schedule' className={this.state.isTop ? 'bold' : 'purp-text'}>Schedule</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
