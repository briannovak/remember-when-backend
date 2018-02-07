exports.up = function(knex, Promise) {
    return knex.schema.createTable("event", (table) => {
        table.increments();
				table.text("name");
				table.date("date")
				table.text("type");
				table.string("attendees")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("event");
};
