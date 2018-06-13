import React, { Component } from 'react';

class About extends Component {
  render () {
    return (
      <div className='container' id='cont-top'>
        <h2 className='center-align'>About ServerlessDays</h2>
        <div className='container'>
          <p>
          ServerlessDays are a family of events around the world focused on fostering a community around serverless technologies.
          </p>
          <p>
          ServerlessDays began as JeffConf, a tongue in cheek conference in the spirit of Paul Johnston’s blog post, “Serverless is just a name. We could have called it Jeff”, an attempt to move beyond the serverless buzzword and focus on the practical use of function as a service platforms and the value they provide. It is a one day, community focused, single track event centered on real world serverless-based solutions. It’s about fostering a community and helping all of us learn from each other as we embrace a new way of building applications.
          </p>
          <p>
          Each ServerlessDay is unique, organised by locals and not run for profit. They are run according to the following principles:
          </p>
          <ul>
            <li>Local: run by local community organisors</li>
            <li>Accessible: financially and physically accessible to the community</li>
            <li>Representitive: representative of the broader community within which it exists</li>
          </ul>
          <p>Learn more at the <a href='https://serverlessdays.io/' target='_blank'>ServerlessDays website</a>.</p>
        </div>
        <h2 className='center-align' id='#coc'>Code of Conduct</h2>
        <div className='container'>
          <p>
          All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct. Organisers will enforce this code throughout the event. We are expecting cooperation from all participants to help ensuring a safe environment for everybody.
          </p>
          <p>
          tl;dr: Jeff says be excellent with each other.
          </p>
          <h5>The Quick Version</h5>
          <p>
          Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, or religion (or lack thereof). We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.
          </p>
          <h5>The Less Quick Version</h5>
          <p>
          Harassment includes offensive verbal comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
          </p>
          <p>
          Participants asked to stop any harassing behavior are expected to comply immediately.
          </p>
          <p>
          Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualized environment.
          </p>
          <p>
          If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.
          </p>
          <p>
          If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they’ll be wearing branded t-shirts.
          </p>
          <p>
          Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.
          </p>
          <p>
          We expect participants to follow these rules at conference and workshop venues and conference-related social events.
          </p>
        </div>
        <div className='center-align' id='#organizers'>
          <h2>Organizers</h2>
          <p>ServerlessDays Portland is presented in cooperation with <a href='https://www.stackery.io/' target='_blank'>Stackery</a>.</p>
          <img src={'./media/stackery-logo-horizontal-teal-bf925c02f93a9d977e2eb11fc85f609ef283ecd4a85551f0f2fd17fa16192c12.svg'} alt={'Stackery logo'} className='responsive-img not-wide' />
        </div>
      </div>
    );
  }
}

export default About;
