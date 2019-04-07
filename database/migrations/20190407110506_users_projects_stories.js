exports.up = function(knex) {
  return knex.schema
    .createTable('users', users => {
      users.increments();

      users.string('username', 20).notNullable();
      users.string('password', 128).notNullable();
      users.string('name', 128).notNullable();
      users
        .string('email', 128)
        .notNullable()
        .unique();
      users.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('projects', projects => {
      projects.increments();
      projects
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      projects
        .string('name', 128)
        .notNullable()
        .unique();
      projects.string('description', 255).notNullable();
      projects.boolean('completed').defaultTo(false);
      projects.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('stories', stories => {
      stories.increments();
      stories
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      stories.string('name', 128).notNullable();
      stories.string('description', 255).notNullable();
      stories.integer('predicted_duration');
      stories.boolean('completed').defaultTo(false);
      stories.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('stories')
    .dropTableIfExists('projects')
    .dropTableIfExists('users');
};
