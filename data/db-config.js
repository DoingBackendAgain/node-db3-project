// db-config
const knex = require("knex")

const knexfile = require("../knexfile")

const database = "developement"

module.exports = knex(knexfile[database]);