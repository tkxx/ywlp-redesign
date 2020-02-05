import React, { Component } from "react";
import Navbar from "./components/NavBar/navbar";
import routes from "./routes";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
}
