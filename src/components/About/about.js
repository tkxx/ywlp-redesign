import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>About page</h1>
        <h3>// Mission Statement // How we give back to the community</h3>
        <p>
          <Link to="/">Home</Link>
        </p>
      </React.Fragment>
    );
  }
}

export default About;
