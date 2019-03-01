import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./components/Main";
import Patients from "./components/Patients";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route path="/Patients" component={Patients} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
