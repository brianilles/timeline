const db = require('../database/dbConfig.js');

module.exports = {
  add,
  getUserById
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
