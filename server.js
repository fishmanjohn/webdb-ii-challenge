const express = require('express');
const cors = require('cors')
const server = express();
const carsRouter = require('./data/routers/cars-router')
server.use(express.json());
server.use(cors())
server.use('/api/cars',carsRouter)
module.exports = server;