import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './signup-login.scss';

export default class Signup extends Component {
  state = {
    email: '',
    name: '',
    username: '',
    password: ''
  };

  render() {
    const { name, username, email, password } = this.state;
    return (
      <div className="signup-login signup">
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            required
          />
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            required
          />
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleInputChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Sign Up</button>
          <span>
            {' '}
            Already have an account?
            <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:5000/api/register';
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res);
        this.login();
      })
      .catch(error => {
        console.error('LOGIN ERROR:', error);
      });
  };

  login = () => {
    const endpoint = 'http://localhost:5000/api/login';
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/home');
      })
      .catch(error => {
        console.error('LOGIN ERROR:', error);
      });
    this.setState({
      email: '',
      name: '',
      username: '',
      password: ''
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
}
