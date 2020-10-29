// Update with your config settings.

module.exports = {

  client: 'mysql2',
  connection: {
    database: 'knowledge',
    user: 'root',
    password: '3006'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }


};
