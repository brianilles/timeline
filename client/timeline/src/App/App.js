import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../scss/App.scss';
import Login from './Auth/Login.js';
import Signup from './Auth/Signup.js';
import Home from './Home/Home.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </main>
      </div>
    );
  }
}
