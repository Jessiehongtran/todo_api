
exports.up = function(knex) {
  return knex.schema.createTable("task", tbl => {
      tbl.increments()
      tbl.string("task_name")
      tbl.string("team")
      tbl.string("created_by")
      tbl.integer("created_time")
      tbl.integer("deadline")
      tbl.boolean('archived')
      tbl.string("category").notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("task")
};
