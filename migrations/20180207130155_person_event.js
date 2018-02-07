exports.up = function(knex, Promise) {
    return knex.schema.createTable("person_event", (table) => {
        table.increments();
        table.integer("person_id");
        table.integer("event_id")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("person_event");
};
