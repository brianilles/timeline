import React, { Component } from 'react';
import Authenticate from '../Auth/Authenticate.js';
import { NavLink, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <NavLink to="/home">home</NavLink>
          <Link to="/login" onClick={this.logout}>
            logout
          </Link>
        </header>
        <p>hello world from home</p>
      </div>
    );
  }
  logout = () => {
    localStorage.removeItem('token');
  };
}

export default Authenticate(Home);
