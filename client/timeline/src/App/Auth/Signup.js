import React, { Component } from 'react';
import axios from 'axios';

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
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleInputChange}
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:5000/api/register';
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res);
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
