import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Speakers extends Component {
  render () {
    return (
      <div className='container' id='top'>
        <div className='container'>
          <div className='center-align'>
            <h2 className='center-align'>2018 Speakers</h2>
            <div className='titleHR' />
          </div>
          <Row>
            <Col s={12} l={12} id='charity'>
              <h4 className='top-marg'>Charity Majors</h4>
              <h5 className='company'>Honeycomb.io</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Charity is a cofounder and engineer at Honeycomb.io, a startup that blends the speed of time series with the raw power of rich events to give you interactive, iterative debugging of complex systems. She has worked at companies like Facebook, Parse, and Linden Lab, as a systems engineer and engineering manager, but always seems to end up responsible for the databases too. She loves free speech, free software and a nice peaty single malt.</p>
              <p>Pronouns: she/her</p>
              <h5><a href='https://www.twitter.com/mipsytipsy' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a><a href='https://www.linkedin.com/in/charity-majors-826b765/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/charity.jpg'} alt={'Charity Majors'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='chase'>
              <h4 className='top-marg'>Chase Douglas</h4>
              <h5 className='company'>Stackery</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Chase Douglas is the co-founder and CTO of Stackery.io, a devops toolkit for organizations building serverless applications and services. His experience spans the gamut of technical and managerial, specifically focused on how teams of developers build products collaboratively. In prior roles he has been a VP of engineering at a web application security company, technical architect of the New Relic Browser product, and an architect of multitouch on the Linux desktop.</p>
              <p>Pronouns: he/him</p>
              <h5><a href='https://twitter.com/txase' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a><a href='https://www.linkedin.com/in/chasedouglas/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/chase.jpg'} alt={'Chase Douglas'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='chris'>
              <h4 className='top-marg'>Chris Munns</h4>
              <h5 className='company'>Amazon Web Services</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Chris Munns is a Senior Developer Advocate for Serverless Applications at Amazon Web Services based in New York City. Chris works with AWS's developer customers to understand how serverless technologies can drastically change the way they think abount building and running applications at potentially massive scale with minimal administration overhead. Prior to this role, Chris was the global Business Development Manager for DevOps at AWS, spent a few years as a Solutions Architect at AWS, and has held senior operations engineering posts at Etsy, Meetup, and other NYC-based startups. Chris has a Bachelor of Science in Applied Networking and System Administration from Rochester Institute of Technology.</p>
              <p>Pronouns: he/him</p> 
              <h5><a href='https://twitter.com/chrismunns' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a><a href='https://www.linkedin.com/in/chrismunns/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/chris.png'} alt={'Chris Munns'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='eduardo'>
              <h4 className='top-marg'>Eduardo Laureano</h4>
              <h5 className='company'>Microsoft</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Eduardo Laureano is the Principal PM Lead at Azure Functions for Microsoft. Beyond building serverless products at Azure, Eduardo has a wide range of experience at Microsoft covering services such as Bing (building ML classifiers) and many others. He also swims, bikes and runs occasionally.</p>
              <p>Pronouns: he/him</p>
              <h5><a href='https://twitter.com/eduardolaureano' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/eduardo.jpg'} alt={'Eduardo Laureano'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='erica'>
              <h4 className='top-marg'>Erica Windisch</h4>
              <h5 className='company'>IOpipe</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Erica is CTO & Founder at IOpipe where she is building tools to help developers of serverless applications iterate faster and support their applications in production. She is a former maintainer of Docker and OpenStack and has been building cloud, ops, and infrastructure tooling for over 15 years.</p>
              <p>Pronouns: she/her</p>
              <h5><a href='https://twitter.com/ewindisch' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a><a href='https://www.linkedin.com/in/ewindisch/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/erica.jpg'} alt={'Erica Windisch'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='ian'>
              <h4 className='top-marg'>Ian Scofield</h4>
              <h5 className='company'>Amazon Web Services</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Ian Scofield is a Partner Solutions Architect at AWS, based in Seattle, WA who works with customers to help them build well-architected solutions. He works with Partners that provide tooling and services that help customers build and run serverless applications.  Prior to working at AWS, Ian was a Signal Officer in the United States Army and enjoys being outdoors, skiing and hiking.</p>
              <p>Pronouns: he/him</p>
              <h5><a href='https://www.linkedin.com/in/iscofield' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/ian.jpg'} alt={'Ian Scofield'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='john'>
              <h4 className='top-marg'>John Miller</h4>
              <h5 className='company'>Fauna</h5>
            </Col>
            <Col s={12} l={9}>
              <p>John Miller III is a senior developer at Fauna since 2017 and focuses on driving advanced technologies into the core server. Prior to Fauna, John spent 28 years as a Senior Technical Staff Member (STSM) at IBM. In his last year, he lead IBM’s Analytics Platform development group and brought advanced technology to the Next Generation Analytic Platform, which served the needs of data engineers and data scientists. In addition, he spent 26 years with Informix and 7 years as chief architect where he has designed many components and features, including the Hybrid JSON functionality. John has also focused on the embed space, including a completed redesign of the Informix administration system and the OpenAdmin Tool for Informix. He has led key improvements in database backups, high availability, benchmarking, scale up and scale out architectures, and has patents granted and pending in these areas. John was also a member of the IBM Academy of Technology, on numerous architecture and technical promotion boards, and involved in many cross IBM technology initiatives.</p>
              <p>Pronouns: he/him</p>
              <h5><a href='https://www.linkedin.com/in/john-miller-7b9b21' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/john.png'} alt={'John Miller'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='kelsey'>
              <h4 className='top-marg'>Kelsey Hightower</h4>
              <h5 className='company'>Google</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Kelsey is a technologist working at Google on simple solutions to hard problems. He has worn every hat possible throughout his career in tech, and enjoys leadership roles focused on making things happen and shipping software. Kelsey is a strong open source advocate focused on building simple tools that make people smile.</p>
              <p>Pronouns: he/him</p>
              <h5><a href='https://twitter.com/kelseyhightower' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/kelsey.jpg'} alt={'Kelsey Hightower'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='nitzan'>
              <h4 className='top-marg'>Nitzan Shapira</h4>
              <h5 className='company'>Epsagon</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Nitzan Shapira is a co-founder and the CEO at Epsagon, focused on bringing observability to serverless cloud applications. Nitzan is also a software engineer with over 12 years of experience in programming, machine learning, cyber-security, and reverse engineering. Using distributed tracing and AI technologies, his team is tackling the unique observability challenges in serverless environments. Apart from co-founding Epsagon, Nitzan also enjoys playing the piano, he is a traveling enthusiast, an experienced chess player, and addicted to sports.</p>
              <p>Pronouns: he/him</p>
              <h5><a href='https://twitter.com/nitzanshapira' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/nitzan.jpg'} alt={'Nitzan Shapira'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='tal'>
              <h4 className='top-marg'>Tal Melamed</h4>
              <h5 className='company'>Protego</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Tal has 15 years of experience in the information security field, specializing in security research and vulnerability assessment. Prior to being the Head of Security Research at Protego, Tal was a tech leader at AppSec Labs, leading and executing a variety of security projects for serverless, IoT, mobile, web, and client applications, as well as working for leading security organizations such as Synack, CheckPoint, and RSA.</p>
              <p>Pronouns: he/him</p>
              <h5><a href='https://twitter.com/_nu11p0inter' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a><a href='https://www.linkedin.com/in/talmelamed/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/tal.jpg'} alt={'Tal Melamed'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='toby'>
              <h4 className='top-marg'>Toby Fee</h4>
              <h5 className='company'>Stackery</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Toby is a community developer at Stackery. Previously a web developer for several years, her experience is mainly in user experimentation and data management. She’s the author of “The JQuery Spellbook” due out in fall.</p>
              <p>Pronouns: she/her</p>
              <h5><a href='https://twitter.com/tobyfee' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a><a href='https://www.linkedin.com/in/tobyfee' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/toby.jpg'} alt={'Toby Fee'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='will'>
              <h4 className='top-marg'>Will Plusnick</h4>
              <h5 className='company'>IBM</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Will Plusnick is a developer advocate for IBM focusing on Kubernetes and serverless. He started to learn to program as a child, but took a detour to do physics for a few years. After coming back to computing, he has been working in cloud services since 2015. Some of his favorite things outside of tech include hanging out with friends, sleeping in his own bed, and getting to experience new cultures through food.</p>
              <p>Pronouns: he/him</p>
              <h5><a href='https://twitter.com/willplusnick' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/will.jpg'} alt={'Will Plusnick'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <div className='space-foot' />
          <p>Want to find out who's speaking as soon as they're announced? Sign up for our <a data-target='signupModal' className='modal-trigger'>mailing list</a> to be notified.</p>
        </div>
      </div>
    );
  }
}

export default Speakers;
