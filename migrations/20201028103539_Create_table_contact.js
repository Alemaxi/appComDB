
exports.up = function(knex) {
  return knex.schema.createTable('contacts', function(table){
      table.increments('id');
      table.string('email',200).notNullable();
      table.string('mensagem',1000).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts');
};
