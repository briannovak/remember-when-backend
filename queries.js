const database = require("./database-connection");

module.exports = {
  listPeople(){
		return database("person");
  },
  listEvents(){
		return database("event");
  },
  listAppData(){
		return database("person_event");
  },
  readPerson(id){
		return database("person").where("id", id).first();
  },
  readEvent(id){
		return database("event").where("id", id).first();
  },
  createEvent(event){
		return database("event").insert(event).returning("*").then(record => record[0]);
  },
  createPerson(person){
		return database("person").insert(person).returning("*").then(record => record[0]);
  },
  createAppData(appData){
		return database("person_event").insert(appData).returning("*").then(record => record[0]);
  },
	deleteEvent(id){
		return database("event").delete().where("id", id);
	},
	deletePerson(id){
		return database("person").delete().where("id", id);
	},
	deleteAppData(id){
		return database("person_event").delete().where("event_id", id);
	},
  updatePerson(id, person){
		return database("person").update(person).where("id", id).returning("*").then(record => record[0]);
  },
  updateEvent(id, event){
		return database("event").update(event).where("id", id).returning("*").then(record => record[0]);
  },
};
