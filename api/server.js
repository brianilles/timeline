const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const registerRouter = require('../auth/register/register-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send('working');
});

// OPEN routes
server.use('/api/register', registerRouter);
// RESTRICTED routes

module.exports = server;
