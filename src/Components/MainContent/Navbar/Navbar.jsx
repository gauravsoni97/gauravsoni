import React from "react";
import "../../../index.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link " activeClassName="active-link">
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/resume" className="navbar-link"  activeClassName="active-link" >
            Resume
          </NavLink>
        </li>

        <li className="navbar-item">
        <NavLink to="/portfolio" className="navbar-link"  activeClassName="active-link">
            Portfolio
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link"  activeClassName="active-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
