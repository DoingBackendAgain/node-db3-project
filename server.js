const express = require('express');

const schemeRouter = require("./schemes/scheme-router");

const server = express();

server.use(express.json());
server.use('api/schemes', schemeRouter);

module.exports = server;