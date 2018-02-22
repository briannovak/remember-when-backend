exports.seed = function(knex, Promise) {
  return knex("person").del()
    .then(function () {
      return knex("person").insert([
        {name: "Carolyn Selheim-Miller", last_event: "2018-02-03", count: 2},
        {name: "Zachary Shannon", last_event: "1979-07-09", count: 5},
        {name: "Christy Heaton", last_event: "1979-12-30", count: 1}
      ]);
    })
    .then (() => {
        return knex.raw("ALTER SEQUENCE person_id_seq RESTART WITH 4;")
    })
};
