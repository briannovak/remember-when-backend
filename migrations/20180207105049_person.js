exports.up = function(knex, Promise) {
    return knex.schema.createTable("person", (table) => {
        table.increments();
        table.text("name");
        table.date("last_event");
				table.integer("count")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("person");
};
