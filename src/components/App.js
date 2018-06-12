import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import Foot from './Foot';
import Home from './Home';
import About from './About';
import Location from './Location';
import Schedule from './Schedule';
import Workshops from './Workshops';

// Location, Schedule, and Workshop components will be used in the future and can be commented out for now here and in the navbar

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <main>
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/location' component={Location} />
                <Route path='/schedule' component={Schedule} />
                <Route path='/workshops' component={Workshops} />
                {/* 404 route below */}
                <Route render={function () {
                  return (
                    <div className='container center-align'>
                      <h1>Not found!</h1>
                      <img src={'./media/octo_mascot.png'} alt={'404 Octopus'} className='responsive-img not-wide' />
                      <p>We can't find what you're looking for. How about going <Link to='/'>home</Link>?</p>
                    </div>
                  );
                }} />
              </Switch>
            </div>
          </main>
          <Foot />
        </div>
      </Router>
    );
  }
}

export default App;
