exports.up = function(knex, Promise) {
    return knex.schema.createTable("person", (table) => {
        table.increments();
        table.text("name");
        table.date("birthday");
        table.text("color");
				table.integer("count")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("person");
};
