import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div className="nav">
      <NavLink to="/" className="blue-nav">
        Home
      </NavLink>
      <NavLink to="/about" className="purple-nav">
        About Me
      </NavLink>
      <NavLink to="/projects" className="blue-nav">
        Projects
      </NavLink>
      <NavLink to="/contact" className="purple-nav">
        Contact
      </NavLink>
    </div>
  );
}
