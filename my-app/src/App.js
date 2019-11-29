// import logo from './logo.svg';
import './App.css';
//import '../public/favicon.ico';
import axios from 'axios';
import React, { Component } from 'react';
import profileVid from './images/PEOPLE_V3_2.mp4';
import profileImg from './images/Resume Photo.png';
import Resume from './images/Andrew-Alkazeer-Resume.pdf';
import project1 from './images/01_Screenshot (2).jpg';
import project2 from './images/login with register backend.png';
import project3 from './images/Angular-App.png';
import project4 from './images/Login Screen.jpg';
import project5 from './images/Marketing Platform.jpg';
import project6 from './images/Book a Flight.png';

export class App extends Component {
constructor(props){
  super(props);

this.state = ({
    loves: [],
    topBar: {
    position: 'absolute',
    width: '100%',
    height: '10px',
    background: 'white',
    top: '20%',
    transition: '1s'
  },
    bottomBar: {
    position: 'absolute',
    width: '100%',
    height: '10px',
    background: 'white',
    top: '60%',
    transition: '1s'
  },
    hiddenMenu: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    background: 'white',
    left: '0',
    top: '0',
    zIndex: '3',
    transition: '1s',
    top: '-100%'
  },
    dividerLineOne: {
    width: '100px',
    height: '5px',
    background: '#ffce0a',
    transition: '0.5s'
  },
    dividerLineTwo: {
    width: '100px',
    height: '5px',
    background: '#ffce0a',
    transition: '0.5s'
  },
    dividerLineThree: {
    width: '100px',
    height: '5px',
    background: '#ffce0a',
    transition: '0.5s'
  },
    dividerLineFour: {
    width: '100px',
    height: '5px',
    background: '#ffce0a',
    transition: '0.5s'
  }
})
}
  
  componentDidMount = ()=>{
    axios.get('/hearts').then(love =>{
      this.setState({loves: love.data});
      console.log(this.state.loves);
    });
  }

  barsAnime = ()=>{
    console.log(this.state.loves.length);
     if(this.state.topBar.top === '20%'){
       this.setState({topBar: {
        position: 'absolute',
        width: '100%',
        height: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        transform: 'rotate(-130deg)',
        transition: '1s',
        background: 'white'
       },
       bottomBar: {
        position: 'absolute',
        width: '100%',
        height: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        transform: 'rotate(130deg)',
        transition: '1s',
        background: 'white'
       },
       hiddenMenu: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'black',
        left: '0',
        top: '0',
        zIndex: '3',
        transition: '1s',
        top: '0%',
        transitionTimingFunction: 'cubic-bezier(.17,.67,.83,.67)'
       }
       })
     } else{
      this.setState({topBar: {
        position: 'absolute',
        width: '100%',
        height: '10px',
        background: 'white',
        top: '20%',
        transition: '1s'
      },
      bottomBar: {
        position: 'absolute',
        width: '100%',
        height: '10px',
        background: 'white',
        top: '60%',
        transition: '1s'
      },
      hiddenMenu: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        background: 'white',
        left: '0',
        top: '0',
        zIndex: '3',
        transition: '1s',
        top: '-100%',
        transitionTimingFunction: 'cubic-bezier(.17,.67,.83,.67)'
       }
       })
     }
 
  };

  dividerAnimeOne = ()=>{
    if(this.state.dividerLineOne.width === '100px'){
      this.setState({dividerLineOne: {
        width: '50%',
        height: '5px',
        background: '#ffce0a',
        transition: '0.5s'
        }})
    } else{
      this.setState({dividerLineOne: {
        width: '100px',
        height: '5px',
        background: '#ffce0a',
        transition: '0.5s'
        }})
    }
  };
  dividerAnimeOneL = ()=>{
      this.setState({dividerLineOne: {
        width: '100px',
        height: '5px',
        background: '#ffce0a',
        transition: '0.5s'
        }})
  };
  dividerAnimeTwo = ()=>{
    if(this.state.dividerLineTwo.width === '100px'){
      this.setState({dividerLineTwo: {
        width: '50%',
        height: '5px',
        background: '#ffce0a',
        transition: '0.5s'
        }})
    } else{
      this.setState({dividerLineTwo: {
        width: '100px',
        height: '5px',
        background: '#ffce0a',
        transition: '0.5s'
        }})
    }
  };
  dividerAnimeTwoL = ()=>{
    this.setState({dividerLineTwo: {
      width: '100px',
      height: '5px',
      background: '#ffce0a',
      transition: '0.5s'
      }})
};
  dividerAnimeThree = ()=>{
    if(this.state.dividerLineThree.width === '100px'){
      this.setState({dividerLineThree: {
        width: '50%',
        height: '5px',
        background: '#ffce0a',
        transition: '0.5s'
        }})
    } else{
      this.setState({dividerLineThree: {
        width: '100px',
        height: '5px',
        background: '#ffce0a',
        transition: '0.5s'
        }})
    }
  };
  dividerAnimeThreeL = ()=>{
    this.setState({dividerLineThree: {
      width: '100px',
      height: '5px',
      background: '#ffce0a',
      transition: '0.5s'
      }})
};
  dividerAnimeFour = ()=>{
    if(this.state.dividerLineFour.width === '100px'){
      this.setState({dividerLineFour: {
        width: '50%',
        height: '5px',
        background: '#ffce0a',
        transition: '0.5s'
        }})
    } else{
      this.setState({dividerLineFour: {
        width: '100px',
        height: '5px',
        background: '#ffce0a',
        transition: '0.5s'
        }})
    }
  };
  dividerAnimeFourL = ()=>{
    this.setState({dividerLineFour: {
      width: '100px',
      height: '5px',
      background: '#ffce0a',
      transition: '0.5s'
      }})
};

navOnClick = () =>{
  this.setState({
    topBar: {
      position: 'absolute',
      width: '100%',
      height: '10px',
      background: 'white',
      top: '20%',
      transition: '1s'
    },
      bottomBar: {
      position: 'absolute',
      width: '100%',
      height: '10px',
      background: 'white',
      top: '60%',
      transition: '1s'
    },
      hiddenMenu: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      background: 'white',
      left: '0',
      top: '0',
      zIndex: '3',
      transition: '1s',
      top: '-100%'
    }
  })
}

  render() {

  

    return (
     <React.Fragment>

     <div className="navbar-cont" onClick={this.barsAnime}>
     <div style={this.state.topBar} className="top-bar"></div>
     <div style={this.state.bottomBar} className="bottom-bar"></div>
     </div>
     <div style={this.state.hiddenMenu} className="hidden-navbar-menu">
     <ul className="hidden-navbar-menu-ul">
     <li>
     <a onClick={this.navOnClick} onMouseEnter={this.dividerAnimeOne} onMouseLeave={this.dividerAnimeOneL} href="#about-page">ABOUT</a>
     <div style={this.state.dividerLineOne} className="divider-line"></div>
     </li>
     <li>
     <a onClick={this.navOnClick} onMouseEnter={this.dividerAnimeTwo} onMouseLeave={this.dividerAnimeTwoL} href="#skills">SKILLS</a>
     <div style={this.state.dividerLineTwo} className="divider-line"></div>
     </li>
     <li>
     <a onClick={this.navOnClick} onMouseEnter={this.dividerAnimeThree} onMouseLeave={this.dividerAnimeThreeL} href="#recent-works">RECENT WORKS</a>
     <div style={this.state.dividerLineThree} className="divider-line"></div>
     </li>
     <li>
     <a onClick={this.navOnClick} onMouseEnter={this.dividerAnimeFour} onMouseLeave={this.dividerAnimeFourL} href="#contact">CONTACT</a>
     <div style={this.state.dividerLineFour} className="divider-line"></div>
     </li>
     </ul>
     </div>

     <div className="smedia-cont">
     <p className="smedia-title">Social Media</p>
     <div className="smedia"><p className="linkedin" onClick={()=>window.open('https://www.linkedin.com/in/andrewalkazeer/', "_blank")}>LinkedIn</p></div>
     <div className="smedia"><p className="github" onClick={()=>window.open('https://github.com/AndrewAlkazeer', "_blank")}>GitHub</p></div>
     <div className="smedia"><p className="codepen" onClick={()=>window.open('https://codepen.io/andrewalkazeer', "_blank")}>CodePen</p></div>
     <div className="smedia"><p className="free-code-camp" onClick={()=>window.open('https://www.freecodecamp.org/andrewalkazeer', "_blank")}>FreeCodeCamp</p></div>
     </div>

     <div className="spread-love-cont">
     <p>SPREAD THE LOVE</p>
     <p>{this.state.loves.length} HEARTS</p>
     <form action="/loves" method="POST">
     <button type="submit"><i className="glyphicon glyphicon-heart-empty"></i></button>
     </form>
     </div>

     <div className="welcome-page-cont" id="about-page">
     
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
     <div><button onClick={()=> window.open(Resume+"#view=Fit", "_blank")}>View Resume<i className="glyphicon glyphicon-chevron-right"></i></button></div>
     </div>
     <div className="col-lg-6 col-md-6 about-section-info-2">
     <p>I am self taught web development and design. I enjoy building websites with a beautiful and professional user interface using HTML, CSS, Bootstrap, Vanilla JS, and JavaScript with React, jQuery and Angular frameworks. I have some knowledge about graphic design using Adobe XD, Illustrator and Photoshop. I am currently in school for Back End and improving myself in Front End. Willing to work independently as well as with a team to provide an excellent performance, bug fixes, and problem solving as a Front End and Back End Developer.</p>
     </div>
     </div>
     </div>
     </div>


     <div className="second-page-cont" id="skills">
     <div className="container-fluid">
     <div className="row">
     <div className="col-lg-4 second-page-1">
     <div><i className="fab fa-node-js"></i></div>
     <p>Building Static and Dynamic Websites with professional UI Design using JavaScript and its frameworks such as React and Angular to fully interact with Back End server to fetch API data.</p>     </div>
     <div className="col-lg-4 second-page-2">
     <div><i className="fab fa-node"></i></div>
     <p>Working with Node JS, Express, and some Back End npm's to fully interact with Front End View and Back End Server.</p>
     </div>
     
     <div className="col-lg-4 second-page-3">
     <div><i class="fas fa-server"></i></div>
     <p>Providing CRUD operations between the Back End Node JS server and MongoDB database server, and working with Mongoose if needed after creating a template Schema before saving to the database.</p>
     </div>
     </div>
     </div>
     </div>

     <div className="projects-page-cont" id="recent-works">
     <h1>My Recent Work</h1>
     <div className="container-fluid">
     <div className="row">
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><div className="flip-box">
     <div className="flip-box-inner">
       <div className="flip-box-front">
         <img className="project-img" src={project1} alt="project image" />
       </div>
       <div className="flip-box-back">
         <h3>I used HTML, CSS3, Bootstrap, and Vanilla JS to build this project</h3>
         <h4>Personal Portfolio</h4>
         <button onClick={()=> window.open("https://romantic-mayer-479121.netlify.com/", "_blank")}>View <i className="glyphicon glyphicon-chevron-right"></i></button>
       </div>
     </div>
   </div></div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><div className="flip-box">
     <div className="flip-box-inner">
       <div className="flip-box-front">
         <img className="project-img" src={project2} alt="project image" />
       </div>
       <div className="flip-box-back">
         <h3>I used Bootstrap, Adobe XD, React, React-Router, Axios, Node JS, Express JS, and Mongoose to build this project.</h3>
         <h4>Login and Register Users</h4>
         <button onClick={()=> window.open("https://login-ui-react-node-mongoose.herokuapp.com/", "_blank")}>View <i className="glyphicon glyphicon-chevron-right"></i></button>
       </div>
     </div>
   </div></div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><div className="flip-box">
     <div className="flip-box-inner">
       <div className="flip-box-front">
         <img className="project-img" src={project3} alt="project image" />
       </div>
       <div className="flip-box-back">
         <h3>I used HTML, CSS, Bootstrap, and Angular to fetch data from Github API and deploy it to heroku web hosting.</h3>
         <h4>Search Github Users</h4>
         <button onClick={()=> window.open("https://angular-6-app.herokuapp.com/", "_blank")}>View <i className="glyphicon glyphicon-chevron-right"></i></button>
       </div>
     </div>
   </div></div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><div className="flip-box">
     <div className="flip-box-inner">
       <div className="flip-box-front">
         <img className="project-img" src={project4} alt="project image" />
       </div>
       <div className="flip-box-back">
         <h3>I used HTML, CSS, Bootstrap 4, and Adobe XD to build this project.</h3>
         <h4>Login Screen</h4>
         <button onClick={()=> window.open("https://optimistic-kare-74ae46.netlify.com/", "_blank")}>View <i className="glyphicon glyphicon-chevron-right"></i></button>
       </div>
     </div>
   </div></div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><div className="flip-box">
     <div className="flip-box-inner">
       <div className="flip-box-front">
         <img className="project-img" src={project5} alt="project image" />
       </div>
       <div className="flip-box-back">
         <h3>I used HTML, CSS, Bootstrap 3 & 4, and Adobe Photoshop to build this project.</h3>
         <h4>Marketing Platform</h4>
         <button onClick={()=> window.open("https://silly-heisenberg-501912.netlify.com/", "_blank")}>View <i className="glyphicon glyphicon-chevron-right"></i></button>
       </div>
     </div>
   </div></div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-img-cont"><div className="flip-box">
     <div className="flip-box-inner">
       <div className="flip-box-front">
         <img className="project-img" src={project6} alt="project image" />
       </div>
       <div className="flip-box-back">
         <h3>I used HTML, CSS, and Bootstrap 3 to build this project.</h3>
         <h4>Book a Flight</h4>
         <button onClick={()=> window.open("https://upbeat-swartz-78b5b9.netlify.com/", "_blank")}>View <i className="glyphicon glyphicon-chevron-right"></i></button>
       </div>
     </div>
   </div></div>
     </div>
     </div>
     </div>

     <div className="contact-page-cont" id="contact">
     <h2>Interested<span>?</span> Lets get in touch then</h2>
     <div className="container-fluid">
     <div className="row">
     <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 contact">
     <form action="/submit" method="POST">
     <input type="text" placeholder="Your Name*" name="name" required/>
     <input type="email" placeholder="Your Email*" name="email" required/>
     <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Your Phone No." name="phone" />
     <textarea placeholder="Your Message*" name="message" required/>
     <small>Format: 123-456-7890</small>
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
