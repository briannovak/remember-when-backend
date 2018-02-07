exports.seed = function(knex, Promise) {
  return knex("event").del()
    .then(function () {
      return knex("event").insert([
        {name: "At Carolyn and John's place", date:"2018-02-03", type: "Dinner", attendees: "1,2"},
        {name: "At our place", date: "2017-12-09", type: "Dinner", attendees: "1,2"},
        {name: "At our place", date: "2017-12-17", type: "Brunch", attendees: "2,3"},
        {name: "The Opera House", date: "2018-01-13", type: "Movie", attendees: "2"},
        {name: "First Date", date: "2018-01-25", type: "Play", attendees: "2"}
			]);
    })
    .then (() => {
        return knex.raw("ALTER SEQUENCE event_id_seq RESTART WITH 6;")
    })
};
