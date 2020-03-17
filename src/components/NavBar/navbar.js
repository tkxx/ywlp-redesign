import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className="navbar-body">
          <li className="links">LOGO</li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/events/:id">EVENTS</Link>
          </li>
          <li>
            <Link to="/contactus">CONTACT US</Link>
          </li>
          <li>SIGN IN LINK (Firebase)</li>
        </ul>
        Redux + Firebase
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
