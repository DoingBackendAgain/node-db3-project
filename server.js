const express = require('express');

const schemeRouter = require("./api/schemes/scheme-router");

const server = express();

server.use(express.json());
server.use('api/schemes', schemeRouter);

module.exports = server;