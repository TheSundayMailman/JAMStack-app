import React from 'react'
// import { Link } from 'gatsby'

import '../styles/normalize.css'
import '../styles/float-grid.css'
import '../styles/index.css'

const IndexPage = () => (
  <React.Fragment>
  <nav role="navigation">
    <img className="logo" src={require('../assets/logo-white.png')} alt="Albert Sare logo." />
    <h1>Albert Sare</h1>
    <label htmlFor="toggle">&#9776;</label>
    <input type="checkbox" id="toggle" />
    <section className="menu">
      <a target="_blank" rel="noopener noreferrer" href="https://albert-sare.netlify.com/files/albert-sare-resume.pdf"><i className="fas fa-file-alt fa-fw" aria-hidden="true"></i>&nbsp;Résumé</a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman"><i className="fab fa-github fa-fw" aria-hidden="true"></i>&nbsp;GitHub</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/albert-sare"><i className="fab fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;LinkedIn</a>
    </section>
  </nav>
  <header role="banner" id="top">
    <div className="row">
      <section className="col-12 box">
        <h1>Hi, I'm<span id="catcher">Albert Sare,</span>an organic coding robot with a personality from San Francisco.</h1>
      </section>
      <a id="header-footer" href="#main"><i className="fas fa-arrow-circle-down fa-fw" aria-hidden="true"></i>&nbsp;Learn More</a>
    </div>
  </header>
  <main id="main">
  <article className="projects">
      <div className="row">
        <section className="col-12 box">
          <h1 className="section-header"><i className="fas fa-code fa-fw" aria-hidden="true"></i>&nbsp;Projects</h1>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <h2>Acceptable Losses</h2>
          <p>An expense tracking app complete with graphs, email reminders, and billing history. Enter an income source to compare against your monthly expenses. See all upcoming bills and mark them as paid so they reappear on their next due date, all done in this convenient app.</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, React, Redux, Moment, Nivo, Big Calendar, Cron, and NodeMailer. Uses APIs from Cloudinary.</p>
        </section>
        <section className="col-6 box">
          <img className="content-pic" src={require('../assets/acceptable-losses.png')} alt="Acceptable Losses screenshot." />
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://acceptable-losses-client.herokuapp.com">Demo</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/acceptable-losses-client">Client</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/acceptable-losses-server">Server</a>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
            <h2>Pokémon Learning Center</h2>
            <p>An app for learning the names of a few popular Pokémon. Designed to help with memorizing via repetition, this app uses an algorithm that determines which Pokémon should be reviewed based on a user's history of guesses and misses. A Pokémon is more likely to reappear if the user forgets its name.</p>
            <hr />
            <p>Tech Stack: HTML5, CSS3, JavaScript, React, Redux, Node, Express, MongoDB, and Mongoose.</p>
          </section>
        <section className="col-6 box">
          <img className="content-pic" src={require('../assets/pokemon-learning-center.png')} alt="Pokémon Learning Center screenshot." />
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://pokemon-learning-center-client.herokuapp.com">Demo</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/alex-albert-spaced-repitition-client">Client</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/alex-albert-spaced-repitition-server">Server</a>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <h2>Pixel Adventures</h2>
          <p>A browser RPG adventure reminiscent of 90's console era video games. Play as a Knight, Cleric, or Wizard, each donning unique stats and abilities. Defeat the evil Arch-Mage and restore peace to the land of Astera. Talk to town folks, battle monsters, and earn powerful new skills.</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, React, Redux, Node, Express, BCryptJS, JWT, and Passport.</p>
        </section>
        <section className="col-6 box">
          <img className="content-pic" src={require('../assets/pixel-adventures.png')} alt="Pixel Adventures screenshot." />
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://pixel-adventures-client.herokuapp.com">Demo</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman/pixel-adventures-client">Client</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman/pixel-adventures-server">Server</a>
        </section>
      </div>
    </article>
    <article className="about">
      <div className="row">
        <section className="col-12 box">
          <h1 className="section-header"><i className="fas fa-user fa-fw" aria-hidden="true"></i>&nbsp;About Me</h1>
          <img className="profile-pic" src={require('../assets/profile-pic.png')}/>
          <p>In college, I took a career test that said I would excel as a "Space Marriage Lawyer". But since no one is getting married in space yet, I decided to marry something else together: <span className="focus-text">programming and user experience.</span> This stemmed from my first experience with a video game. The fantastic blend of programming and UX is not something I take for granted since.</p>
          <p>Today, I strive to replicate that experience for someone else. <span className="focus-text">Solving puzzles behind the scenes, keeping the code light and concise,</span> and delivering an app that users can consume without thinking, all while <span className="focus-text">working with a crew of fellow do'ers</span> is what keeps me going.</p>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <ul><i className="fas fa-graduation-cap fa-fw" aria-hidden="true"></i>&nbsp;<span className="list-header">School</span>
            <li><span className="list-title">Thinkful,</span>Web Development Intensive, Spring 2018</li>
            <li><span className="list-title">University of California Los Angeles,</span>B.A. of Economics, Summer 2007</li>
          </ul>
        </section>
        <section className="col-6 box">
          <ul><i className="fas fa-briefcase fa-fw" aria-hidden="true"></i>&nbsp;<span className="list-header">Work</span>
            <li><span className="list-title">Full Stack Developer</span>Thinkful - Academic Projects, May 2018 - present</li>
            <li><span className="list-title">Tax Accountant,</span>Tony Quach & Co CPA, May 2007 - April 2018</li>
        </ul>
        </section>
      </div>
    </article>
    <article className="others">
      <div className="row">
        <section className="col-12 box">
          <h1 className="section-header"><i className="fas fa-camera fa-fw" aria-hidden="true"></i>&nbsp;Fun Stuff</h1>
          <p>On my off times, I'm also ordained to marry photography and collectibles into a lovely blend. Playing with action figures is never out of style.</p>
          <p><span className="focus-text">Bokeh</span> (pronounced <span style={{ fontStyle: 'italic' }}>BOH-kay</span>, from the Japanese word [<span title="Japanese language text" lang="ja">暈け</span>] meaning "haze") is an aesthetic quality of blur produced by out-of-focus portions of an image. It's also my choice technique for highlighting my subjects.</p>
          <p>Check out some of my work!</p>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <div className="container">
            <img className="content-pic" src={require('../assets/joker-harley.jpg')} alt="Joker and Harlye Quinn taking a selfie." />
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes">
              <div className="overlay">
                <p className="overlay-text" aria-hidden="true">Click for more!</p>
              </div>
            </a>
          </div>
          <p className="caption-text">Joker and Harley, always up to no good...</p>
        </section>
        <section className="col-6 box">
          <div className="container">
            <img className="content-pic" src={require('../assets/kirby-super-star.jpg')} alt="Kirby eating french fries." />
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes">
              <div className="overlay">
                <p className="overlay-text" aria-hidden="true">Click for more!</p>
              </div>
            </a>
          </div>
          <p className="caption-text">Kirby, just doing his thing.</p>
        </section>
      </div>
      <div className ="row">
        <section className="col-6 box">
          <div className="container">
            <img className="content-pic" src={require('../assets/big-boss.jpg')} alt="Big Boss prawling in a field of grass." />
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes">
              <div className="overlay">
                <p className="overlay-text" aria-hidden="true">Click for more!</p>
              </div>
            </a>
          </div>
          <p className="caption-text">Big Boss, snaking around...</p>
        </section>
        <section className="col-6 box">
          <div className="container">
            <img className="content-pic" src={require('../assets/princess-leia.jpg')} alt="Princess Leia gazing into a hologram." />
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes">
              <div className="overlay">
                <p className="overlay-text" aria-hidden="true">Click for more!</p>
              </div>
            </a>
          </div>
          <p className="caption-text">Princess Leia, hologram gazing.</p>
        </section>
      </div>
    </article>
    <footer role="contentinfo">
    <div className="row">
      <section className="col-4 box">
        <h1>This is Albert Sare!</h1>
        <p>Problem solver by day. Photographer and toy collector by night.</p>
      </section>
      <section className="col-4 box">
        <ul>&nbsp;<span className="list-header">Contact Me</span>
          <li><i className="fas fa-mobile-alt fa-fw" aria-hidden="true"></i>&nbsp;(415) 244-9340</li>
          <li><a target="_blank" rel="noopener noreferrer" href="mailto:alsare@ucla.edu"><i className="fas fa-envelope fa-fw" aria-hidden="true"></i>&nbsp;alsare@ucla.edu</a></li>
        </ul>
      </section>
      <section className="col-4 box">
        <ul><span className="list-header">Check Me Out</span>
          <li><a target="_blank" rel="noopener noreferrer" href="https://albert-sare.netlify.com/files/albert-sare-resume.pdf"><i className="fas fa-file-alt fa-fw" aria-hidden="true"></i>&nbsp;Résumé</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman"><i className="fab fa-github fa-fw" aria-hidden="true"></i>&nbsp;GitHub</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/albert-sare"><i className="fab fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;LinkedIn</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes"><i className="fab fa-instagram fa-fw" aria-hidden="true"></i>&nbsp;Instagram</a></li>
        </ul>
      </section>
      <a id="footer-footer" href="#top"><i className="fas fa-arrow-circle-up fa-fw" aria-hidden="true"></i>&nbsp;Back to top</a>
    </div>
  </footer>
  </main>
  </React.Fragment>
)

export default IndexPage
