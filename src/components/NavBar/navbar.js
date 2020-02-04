import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

const Navbar = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events/:id">Events</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
      {routes}
    </React.Fragment>
  );
};

export default Navbar;
