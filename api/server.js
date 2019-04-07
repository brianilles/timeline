const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const registerRouter = require('../auth/register-router.js');
const loginRouter = require('../auth/login-router.js');
const homeRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send('working');
});

// OPEN routes
server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);

// RESTRICTED route
server.use('/api/projects', homeRouter);

module.exports = server;
