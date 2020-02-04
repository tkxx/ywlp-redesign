import React, { Component } from "react";
import { Link } from "react-router-dom";
import About from "../About/about";

const Navbar = () => {
  return (
    <React.Fragment>
      Navbar
      <p>
        <Link to="/about">About</Link>
      </p>
    </React.Fragment>
  );
};

export default Navbar;
