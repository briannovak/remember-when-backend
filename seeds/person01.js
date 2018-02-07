exports.seed = function(knex, Promise) {
  return knex("person").del()
    .then(function () {
      return knex("person").insert([
        {name: "Carolyn Selheim-Miller", birthday: "1988-11-08", color: "#FF9A00", count: 2},
        {name: "Zachary Shannon", birthday: "1979-07-09", color: "#526EFF", count: 5},
        {name: "Christy Heaton", birthday: "1979-12-30", color: "#7F4FC9", count: 1}
      ]);
    })
    .then (() => {
        return knex.raw("ALTER SEQUENCE person_id_seq RESTART WITH 4;")
    })
};
