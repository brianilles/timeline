const db = require('../database/dbConfig.js');

module.exports = {
  add,
  getUserById,
  findByUsername,
  getAllUsers
};

function getUserById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db('users').insert(user);
  return getUserById(id);
}

function findByUsername(username) {
  return db('users')
    .where({ username })
    .first();
}

function getAllUsers() {
  return db('users').select('username');
}
