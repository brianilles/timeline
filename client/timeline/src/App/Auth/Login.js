import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  render() {
    const { username, password } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Log In</button>
          <Link to="/signup">Signup</Link>
        </form>
      </>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
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
