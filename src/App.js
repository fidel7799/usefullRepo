import React, { Component } from "react";
import logo from "./logo.svg";
import jackie from "./jackie.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Liz, párame bolas</h1>
          <img src={jackie} />
        </header>
      </div>
    );
  }
}

export default App;
