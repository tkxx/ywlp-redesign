import React, { Component } from "react";
import Navbar from "./components/NavBar/navbar";
import About from "./components/About/about";
import routes from "../src/routes";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {routes} */}
        <Navbar />
        <About />
      </div>
    );
  }
}

export default App;
