import React from 'react'
// import { Link } from 'gatsby'

import '../components/normalize.css'
import '../components/float-grid.css'
import '../components/index.css'

const IndexPage = () => (
  <React.Fragment>
  <nav role="navigation">
    <img className="logo" src={require('../assets/logo-black.png')} alt="Albert Sare logo." />
    <h1>Albert Sare</h1>
    <label for="toggle">&#9776;</label>
    <input type="checkbox" id="toggle" />
    <section className="menu">
      <a target="_blank" rel="noopener noreferrer" href="./files/albert-sare-resume.pdf"><i className="fas fa-file-alt fa-fw" aria-hidden="true"></i>&nbsp;Résumé</a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman"><i className="fab fa-github fa-fw" aria-hidden="true"></i>&nbsp;GitHub</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/albert-sare"><i className="fab fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;LinkedIn</a>
    </section>
  </nav>
  <header role="banner" id="top">
    <div className="row">
      <section className="col-12 box" role="region">
        <h1>Hi, I'm<span id="catcher">Albert Sare,</span>an organic coding robot with a personality from San Francisco.</h1>
      </section>
      {/* <a id="header-footer" href="#main"><i className="fas fa-arrow-circle-down fa-fw" aria-hidden="true"></i>&nbsp;Learn More</a> */}
    </div>
  </header>
  <main>
  <article class="projects">
      <div class="row">
        <section class="col-12 box" role="region">
          <h1 class="section-header"><i class="fas fa-code fa-fw" aria-hidden="true"></i>&nbsp;Projects</h1>
        </section>
      </div>
      <div class="row">
        <section class="col-6 box" role="region">
          <h2>Acceptable Losses</h2>
          <p>An expense tracking app complete with graphs, email reminders, and billing history. Enter an income source to compare against your monthly expenses. See all upcoming bills and mark them as paid so they reappear on their next due date, all done in this convenient app.</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, React, Redux, Moment, Nivo, Big Calendar, Cron, and NodeMailer. Uses APIs from Cloudinary.</p>
        </section>
        <section class="col-6 box" role="region">
          <img class="content-pic" src={require('../assets/acceptable-losses.png')} alt="Acceptable Losses screenshot." />
          <a class="repo-link" target="_blank" rel="noopener noreferrer" href="https://acceptable-losses-client.herokuapp.com">Demo</a>
          <a class="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/acceptable-losses-client">Client</a>
          <a class="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/acceptable-losses-server">Server</a>
        </section>
      </div>
      <div class="row">
        <section class="col-6 box" role="region">
            <h2>Pokémon Learning Center</h2>
            <p>An app for learning the names of a few popular Pokémon. Designed to help with memorizing via repetition, this app uses an algorithm that determines which Pokémon should be reviewed based on a user's history of guesses and misses. A Pokémon is more likely to reappear if the user forgets its name.</p>
            <hr />
            <p>Tech Stack: HTML5, CSS3, JavaScript, React, Redux, Node, Express, MongoDB, and Mongoose.</p>
          </section>
        <section class="col-6 box" role="region">
          <img class="content-pic" src={require('../assets/pokemon-learning-center.png')} alt="Pokémon Learning Center screenshot." />
          <a class="repo-link" target="_blank" rel="noopener noreferrer" href="https://pokemon-learning-center-client.herokuapp.com">Demo</a>
          <a class="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/alex-albert-spaced-repitition-client">Client</a>
          <a class="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/alex-albert-spaced-repitition-server">Server</a>
        </section>
      </div>
      <div class="row">
        <section class="col-6 box" role="region">
          <h2>Pixel Adventures</h2>
          <p>A browser RPG adventure reminiscent of 90's console era video games. Play as a Knight, Cleric, or Wizard, each donning unique stats and abilities. Defeat the evil Arch-Mage and restore peace to the land of Astera. Talk to town folks, battle monsters, and earn powerful new skills.</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, React, Redux, Node, Express, BCryptJS, JWT, and Passport.</p>
        </section>
        <section class="col-6 box" role="region">
          <img class="content-pic" src={require('../assets/pixel-adventures.png')} alt="Pixel Adventures screenshot." />
          <a class="repo-link" target="_blank" rel="noopener noreferrer" href="https://pixel-adventures-client.herokuapp.com">Demo</a>
          <a class="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman/pixel-adventures-client">Client</a>
          <a class="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman/pixel-adventures-server">Server</a>
        </section>
      </div>
    </article>
    <article class="about">
      <div class="row">
        <section class="col-12 box" role="region">
          <h1 class="section-header"><i class="fas fa-user fa-fw" aria-hidden="true"></i>&nbsp;About Me</h1>
          <img class="profile-pic" src={require('../assets/profile-pic.png')}/>
          <p>In college, I took a career test that said I would excel as a "Space Marriage Lawyer". But since no one is getting married in space yet, I decided to marry something else together: <span class="focus-text">programming and user experience.</span> This stemmed from my first experience with a video game. The fantastic blend of programming and UX is not something I take for granted since.</p>
          <p>Today, I strive to replicate that experience for someone else. <span class="focus-text">Solving puzzles behind the scenes, keeping the code light and concise,</span> and delivering an app that users can consume without thinking, all while <span class="focus-text">working with a crew of fellow do'ers</span> is what keeps me going.</p>
        </section>
      </div>
      <div class="row">
        <section class="col-6 box" role="region">
          <ul><i class="fas fa-graduation-cap fa-fw" aria-hidden="true"></i>&nbsp;<span class="list-header">School</span>
            <li><span class="list-title">Thinkful,</span>Web Development Intensive, Spring 2018</li>
            <li><span class="list-title">University of California Los Angeles,</span>B.A. of Economics, Summer 2007</li>
          </ul>
        </section>
        <section class="col-6 box" role="region">
          <ul><i class="fas fa-briefcase fa-fw" aria-hidden="true"></i>&nbsp;<span class="list-header">Work</span>
            <li><span class="list-title">Full Stack Developer</span>Thinkful - Academic Projects, May 2018 - present</li>
            <li><span class="list-title">Tax Accountant,</span>Tony Quach & Co CPA, May 2007 - April 2018</li>
        </ul>
        </section>
      </div>
    </article>
    <footer role="contentinfo">
    <div class="row">
      <section class="col-4 box" role="region">
        <h1>This is Albert Sare!</h1>
        <p>Problem solver by day. Photographer and toy collector by night.</p>
      </section>
      <section class="col-4 box" role="region">
        <ul>&nbsp;<span class="list-header">Contact Me</span>
          <li><i class="fas fa-mobile-alt fa-fw" aria-hidden="true"></i>&nbsp;(415) 244-9340</li>
          <li><a target="_blank" rel="noopener noreferrer" href="mailto:alsare@ucla.edu"><i class="fas fa-envelope fa-fw" aria-hidden="true"></i>&nbsp;alsare@ucla.edu</a></li>
        </ul>
      </section>
      <section class="col-4 box" role="region">
        <ul><span class="list-header">Check Me Out</span>
          <li><a target="_blank" rel="noopener noreferrer" href="./files/albert-sare-resume.pdf"><i class="fas fa-file-alt fa-fw" aria-hidden="true"></i>&nbsp;Résumé</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman"><i class="fab fa-github fa-fw" aria-hidden="true"></i>&nbsp;GitHub</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/albert-sare"><i class="fab fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;LinkedIn</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes"><i class="fab fa-instagram fa-fw" aria-hidden="true"></i>&nbsp;Instagram</a></li>
        </ul>
      </section>
      {/* <a id="footer-footer" href="#top"><i class="fas fa-arrow-circle-up fa-fw" aria-hidden="true"></i>&nbsp;Back to top</a> */}
    </div>
  </footer>
  </main>
  </React.Fragment>
)

export default IndexPage
