const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

router.post('/', async (req, res) => {
  const user = req.body;
  const hashedPassword = bcrypt.hashSync(user.password, 12);
  user.password = hashedPassword;
  try {
    const addedUser = await Users.add(user);
    res.status(201).json(addedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'User could not be added.' });
  }
});

module.exports = router;
