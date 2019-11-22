// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import profileImg from './images/20190308_164453.jpg';
import profileVid from './images/PEOPLE_V3_2.mp4';
import profileImg from './images/Resume Photo.png';
import project1 from './images/01_Screenshot (2).jpg';
import project2 from './images/login with register backend.png';
import project3 from './images/Angular-App.png';
import project4 from './images/Login Screen.jpg';
import project5 from './images/Marketing Platform.jpg';
import project6 from './images/Book a Flight.png';

export class App extends Component {
  render() {
    return (
     <React.Fragment>

     <div className="navbar-cont">
     <div className="top-bar"></div>
     <div className="bottom-bar"></div>
     </div>

     <div className="welcome-page-cont">
     
     <video className="welcome-page-vid" autoPlay="true" loop="true">
     <source src={profileVid} type="video/mp4" />
     </video>

     <div className="scroll-cont"><p>Scroll <i className="glyphicon glyphicon-chevron-right"></i></p></div>
     </div>
 

     <div className="about-section-cont">
     <div className="about-section-img-cont">
     <img src={profileImg} alt="Profile Image" />
     </div>
     <div className="container-fluid about-section-info">
     <div className="row">
     <div className="col-lg-6 col-md-6 about-section-info-1">
     <h1>Andrew Alkazeer</h1>
     <h2>Web Developer<span>/</span>Designer <span>&&</span> Salesman</h2>
     <h3>Hireable? <span>YES</span></h3>
     <div><button>View Resume<i className="glyphicon glyphicon-chevron-right"></i></button></div>
     </div>
     <div className="col-lg-6 col-md-6 about-section-info-2">
     <p>I am self taught web development and design. I enjoy building websites with a beautiful and professional user interface using HTML, CSS, Bootstrap, Vanilla JS, and JavaScript with React, jQuery and Angular frameworks. I have some knowledge about graphic design using Adobe XD, Illustrator and Photoshop. I am currently in school for Back End and improving myself in Front End. Willing to work independently as well as with a team to provide an excellent performance, bug fixes, and problem solving as a Front End and Back End Developer.</p>
     </div>
     </div>
     </div>
     </div>


     <div className="second-page-cont">
     <div className="container-fluid">
     <div className="row">
     <div className="col-lg-4 second-page-1">
     <div><i className="fab fa-node-js"></i></div>
     <p>Building Static and Dynamic Websites with professional UI Design using JavaScript and its frameworks such as React and Angular to fully interact with Back End server to fetch API data.</p>
     </div>
     <div className="col-lg-4 second-page-2">
     <div><i className="fab fa-node"></i></div>
     <p>Working with Node JS, Express, Bootstrap, MongoDB, and
     Mongoose Schema to fully interact with Front End, Back End</p>
     </div>
     
     <div className="col-lg-4 second-page-3">
     <div><i class="fas fa-server"></i></div>
     <p>Database</p>
     </div>
     </div>
     </div>
     </div>

     <div className="projects-page-cont">
     <h1>My Recent Work</h1>
     <div className="container-fluid">
     <div className="row">
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><img className="project-img" src={project1} /></div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><img className="project-img" src={project2} /></div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><img className="project-img" src={project3} /></div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><img className="project-img" src={project4} /></div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><img className="project-img" src={project5} /></div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><img className="project-img" src={project6} /></div>
     </div>
     </div>
     </div>

     <div className="contact-page-cont">
     <h2>Interested<span>?</span> Lets get in touch then</h2>
     <div className="container-fluid">
     <div className="row">
     <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 contact">
     <form>
     <input type="text" placeholder="Your Name*" name="name" required/>
     <input type="email" placeholder="Your Email*" name="email" required/>
     <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Your Phone No." name="phone" />
     <textarea placeholder="Your Message*" name="message" required/>
     <div><button type="submit">SEND MESSAGE<i className="glyphicon glyphicon-chevron-right"></i></button></div>
     </form>
     </div>
     </div>
     </div>
     </div>

     <div class="footer">
     <p>Andrew Alkazeer &#x24B8; 2019</p>
     </div>
     </React.Fragment>
    )
  }
}

export default App;
