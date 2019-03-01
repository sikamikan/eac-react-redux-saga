import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Main from "./components/Main";
import Patients from "./components/Patients";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/Patients" component={Patients} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
/*
https://hackernoon.com/redux-saga-tutorial-for-beginners-and-dog-lovers-aa69a17db645
https://blog.benestudio.co/redux-saga-to-the-rescue-607dd3d70d0f?gi=52d22445c475




*/
