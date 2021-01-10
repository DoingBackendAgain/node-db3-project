// db-config
const knex = require("knex")

const knexfile = require("../knexfile")

const database = "development"

module.exports = knex(knexfile[database]);

// const knex = require('knex');
// const config = require('../knexfile');
// const db = knex(config.development);
// module.exports = db;