const routes = require('express').Router();
const User = require('./app/models/User');
 

User.create({ name: 'Celso', email: 'celso@gmail.com', password_hash: '123456' });

module.exports = routes;