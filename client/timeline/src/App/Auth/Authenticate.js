import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(requestConfig => {
  const token = localStorage.getItem('token');
  requestConfig.headers.authorization = token;
  return requestConfig;
});

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem('token');
      const noToken = <Redirect to="/login" />;

      return <>{token ? <Component /> : noToken}</>;
    }
  };
}
