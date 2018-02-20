const express = require("express");
const cors = require("cors");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const knex = require("./knexfile");

app.use(bodyParser.json());
app.use(cors());

app.get("/people", (request, response) => {
    queries.listPeople().then(people => {
        response.json({people});
    }).catch(console.error);
});

app.get("/events", (request, response) => {
    queries.listEvents().then(events => {
        response.json({events});
    }).catch(console.error);
});

app.get("/app-data", (request, response) => {
    queries.listAppData().then(appData => {
        response.json({appData});
    }).catch(console.error);
});

app.get("/people/:id", (request, response) => {
    queries.readPerson(request.params.id).then(person => {
        person
            ? response.json({person})
            : response.sendStatus(404);
    }).catch(console.error);
});

app.get("/events/:id", (request, response) => {
    queries.readEvent(request.params.id).then(event => {
        event
            ? response.json({event})
            : response.sendStatus(404);
    }).catch(console.error);
});

app.post("/events", (request, response) => {
    queries.createEvent(request.body).then(event => {
        response.status(201).json({event: event});
    }).catch(console.error);
});

app.post("/people", (request, response) => {
    queries.createPerson(request.body).then(person => {
        response.status(201).json({person: person});
    }).catch(console.error);
});

app.post("/app-data", (request, response) => {
    queries.createAppData(request.body).then(appData => {
        response.status(201).json({appData: appData});
    }).catch(console.error);
});

app.delete("/events/:id", (request, response) => {
    queries.deleteEvent(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/people/:id", (request, response) => {
    queries.deletePerson(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.delete("/app-data/:id", (request, response) => {
    queries.deleteAppData(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/events/:id", (request, response) => {
    queries.updateEvent(request.params.id, request.body).then(event => {
        response.json(event);
    }).catch(console.error);
});

app.put("/people/:id", (request, response) => {
    queries.updatePerson(request.params.id, request.body).then(person => {
        response.json(person);
    }).catch(console.error);
});

app.use((request, response) => {
    response.send(404);
});

module.exports = app;
