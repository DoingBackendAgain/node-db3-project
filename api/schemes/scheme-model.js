// scheme-model
const db = require("../data/db-config.js")

module.exports = {
    find,
    findById,
    findSteps,
    // add,
    // update,
    // remove
}

function find(){
    return db('schemes')
}

function findById(){
    return db('schemes')
    
}

function findSteps(id){
    return db('schemes as sc')
        .innerJoin("sc.id", "steps.scheme_id")
        .where("steps.scheme_id", id)
        .select("sc.id", "steps.step_number", "steps.instructions")
        .first("sc.id")
}