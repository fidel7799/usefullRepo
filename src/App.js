import React, { Component } from "react";
import logo from "./logo.svg";
import jackie from "./liz.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">¿Toda la vida jodiendo, Liz?</h1>
          <img src={jackie} className="lizImg" alt="Liz" />
        </header>
      </div>
    );
  }
}

export default App;
