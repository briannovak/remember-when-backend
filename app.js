const express = require("express");
const cors = require("cors");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const knex = require("./knexfile");

app.use(bodyParser.json());
app.use(cors());

app.get("/people", (request, response, next) => {
    queries.listPeople().then(people => {
        response.json({people});
    }).catch(next);
});

app.get("/events", (request, response, next) => {
    queries.listEvents().then(events => {
        response.json({events});
    }).catch(next);
});

app.get("/app-data", (request, response, next) => {
    queries.listAppData().then(appData => {
        response.json({appData});
    }).catch(next);
});

app.get("/people/:id", (request, response, next) => {
    queries.readPerson(request.params.id).then(person => {
        person
            ? response.json({person})
            : response.sendStatus(404);
    }).catch(next);
});

app.get("/events/:id", (request, response, next) => {
    queries.readEvent(request.params.id).then(event => {
        event
            ? response.json({event})
            : response.sendStatus(404);
    }).catch(next);
});

app.post("/events", (request, response, next) => {
    queries.createEvent(request.body).then(event => {
        response.status(201).json("Your event was added!");
    }).catch(next);
});

app.post("/people", (request, response, next) => {
    queries.createPerson(request.body).then(person => {
        response.status(201).json("Your friend was added!");
    }).catch(next);
});

app.post("/app-data", (request, response, next) => {
    queries.createAppData(request.body).then(appData => {
        response.status(201).json({appData: appData});
    }).catch(next);
});

app.delete("/events/:id", (request, response, next) => {
    queries.deleteEvent(request.params.id).then(() => {
        response.status(204).json("Your event was removed!");
    }).catch(next);
});

app.delete("/people/:id", (request, response, next) => {
    queries.deletePerson(request.params.id).then(() => {
        response.status(204).json("Your friend was removed!");
    }).catch(next);
});

app.delete("/app-data/:id", (request, response, next) => {
    queries.deleteAppData(request.params.id).then(() => {
        response.status(204);
    }).catch(next);
});

app.put("/events/:id", (request, response, next) => {
    queries.updateEvent(request.params.id, request.body).then(event => {
        response.json(event);
    }).catch(next);
});

app.put("/people/:id", (request, response, next) => {
    queries.updatePerson(request.params.id, request.body).then(person => {
        response.json(person);
    }).catch(next);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports = app;
