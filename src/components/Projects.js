import React from 'react';

export default function Projects() {
  return (
    <div className="row-three">
      <section className="project-pic">
        <img
          src={require('../images/cat-redux.jpg')}
          alt="Fun Facts Featuring Cats application"
        />
      </section>
      <section className="project-desc">
        <h2>Fun Facts Featuring Cats</h2>
        <div className="project-links">
          <a href="https://barbara-cat-react-redux.vercel.app/">Live Site</a>
          &nbsp;|&nbsp;
          <a href="https://github.com/barbaralois/React-Redux-App/tree/barbara-moore">
            GitHub
          </a>
        </div>
        <h3>Skills Used:</h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Axios</li>
        </ul>
      </section>
    </div>
  );
}
