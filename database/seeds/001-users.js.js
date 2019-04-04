const faker = require('faker');
const bcrypt = require('bcryptjs');

function fakeCredentials(amount) {
  const credsArray = [];

  for (let i = 0; i < amount; i++) {
    credsArray.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: bcrypt.hashSync(faker.internet.password(), 8)
    });
  }
  return credsArray;
}

exports.seed = function(knex) {
  return knex('users').insert(fakeCredentials(100));
};
