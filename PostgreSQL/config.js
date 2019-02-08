//const path = require('path');

let knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'quatro',
    password: 'quatro',
    database: 'menubarcomponent'
  }
});

let db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (table) {
      table.integer('user_id');
      table.string('display_name', 500);
      table.string('logo', 1000);
      table.string('profile_image_url', 1000);
      table.string('category', 500);
      table.integer('followers');
      table.integer('following');
    }).then(function (table) {
      console.log('Created Table: ', table);
    });
  }
});

db.knex.schema.hasTable('followers').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('followers', function (table) {
      table.integer('follower_id');
      table.string('display_name', 500);
      table.string('logo', 1000);
      table.string('category', 500);
    }).then(function (table) {
      console.log('Created Table: ', table);
    });
  }
});




module.exports = db;

/* Notes
To install PostgreSQL run:
brew install postgresql

To start the database server run:
pg_ctl -D /usr/local/var/postgres start

To stop the database server run:
pg_ctl -D /usr/local/var/postgres stop

To connect to the default database run:
psql postgres

To create a new role, connect and then run:
CREATE ROLE nameOfRole WITH LOGIN PASSWORD 'password';

To allow the new role to create databases run:
ALTER ROLE nameOfRole CREATEDB;

To create new database run:
CREATE DATABASE nameOfDatabase;

To connect to the new database run:
\c nameOfDatabase

Helpful psql command tips can be found here:
https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546
*/