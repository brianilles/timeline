exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users.string('name', 128).notNullable();
    users
      .string('email', 128)
      .notNullable()
      .unique();
    users
      .string('username', 128)
      .notNullable()
      .unique();
    users.string('password', 128).notNullable();
    users.string('team', 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};