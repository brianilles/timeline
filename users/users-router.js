const router = require('express').Router();

const Users = require('./users-model.js');
const { authenticate } = require('../auth/authenticate.js');

router.get('/', authenticate, async (req, res) => {
  try {
    const users = await Users.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users.' });
  }
});

module.exports = router;
