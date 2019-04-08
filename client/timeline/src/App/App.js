import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import '../scss/App.scss';
import Login from './Auth/Login.js';
import Signup from './Auth/Signup.js';
import Home from './Home/Home.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/signup">signup</NavLink>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/home">home</NavLink>
          <button onClick={this.logout}>logout</button>
        </header>
        <main>
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </main>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('token');
  };
}
