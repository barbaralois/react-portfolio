import React from 'react';

export default function Home() {
  return (
    <div className="home">
      <div className="row-one">
        <section className="name">
          <h1>Barbara Moore</h1>
          <h3>Web Developer</h3>
        </section>
        <section className="portrait">
          <img src={require('../images/Oct-2019.jpg')} alt="Barbara Moore" />
        </section>
      </div>
      <div className="row-two">
        <section className="intro">
          <h2>Introduction</h2>
          <p>
            Hello, and welcome to my virtual resume. I'm Barbara, a pre-k
            teacher turned web developer currently living Georgia.
          </p>
          <p>
            I hope that something you find here is intriguing, piques your
            interest, or at the very least inspires you to keep reading. For
            more info, you can click the links above to navigate through my
            site.
          </p>
        </section>
        <section className="work-history">
          <h2>Work History</h2>
          <div className="job">
            <h4>Virtual Assistant</h4>
            <h5>October 2019 to Present</h5>
            <p>
              Manage social media for multiple LuLaRoe retailers, send invoices,
              use markdown to create customized shop layouts
            </p>
          </div>
          <div className="job">
            <h4>Pre-K Teacher</h4>
            <h5>July 2015 to June 2019</h5>
            <p>
              Organized and differentiated instruction for 20 four-year olds
              each year to prepare them for Kindergarten
            </p>
          </div>
        </section>
      </div>
      <div className="row-three">
        <section className="contact-info">
          <h2>Contact Me</h2>
          <ul>
            <li>(630) 408 - 3929</li>
            <li>barbaraloismoore@gmail.com</li>
            <li>Atlanta, Georgia</li>
          </ul>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Node.js</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
