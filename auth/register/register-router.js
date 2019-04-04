const express = require('express');
const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../../users/users-model.js');

router.post('/', async (req, res) => {
  // <user password, team-unhashed> -> <hashed>
  const user = req.body;
  const hashedPassword = bcrypt.hashSync(user.password, 8);
  user.password = hashedPassword;

  try {
    const addedUser = await Users.add(user);
    res.status(201).json(addedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
