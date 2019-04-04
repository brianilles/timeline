const db = require('../database/dbConfig.js');

module.exports = {
  add
};

function add(user) {
  return db('users')
    .insert(user)
    .then(user);
}
