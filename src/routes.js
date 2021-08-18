const routes = require('express').Router();
const SessionsController = require('./app/controllers/SessionsController');


routes.post("/sessions", SessionsController.store);


module.exports = routes;
