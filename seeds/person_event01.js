exports.seed = function(knex, Promise) {
  return knex("person_event").del()
    .then(function () {
      return knex("person_event").insert([
        {person_id: 1, event_id: 1},
        {person_id: 2, event_id: 1},
        {person_id: 1, event_id: 2},
        {person_id: 1, event_id: 2},
        {person_id: 3, event_id: 3},
        {person_id: 2, event_id: 3},
        {person_id: 2, event_id: 4},
        {person_id: 2, event_id: 5}
      ]);
    })
    .then (() => {
        return knex.raw("ALTER SEQUENCE person_event_id_seq RESTART WITH 9;")
    })
};
