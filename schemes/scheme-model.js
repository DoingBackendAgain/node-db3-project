// scheme-model
const db = require("../data/dbconfig.js")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes')
        .where({id})
        .first()
}

function findSteps(id){
    return db('schemes as sc')
        .innerJoin("sc.id", "steps.scheme_id")
        .where("steps.scheme_id", id)
        .select("sc.id", "steps.step_number", "steps.instructions")
        .first("sc.id")
}

function add(){
    return db('schemes')
        .insert(schemeData)
        .then(ids => {
            return getById(ids[0])
        })
    
}

function update(id, changes){
    return db('schemes')
        .where(id)
        .update(changes)
        .then(ids => {
            return getById(ids[0])
        })
        
}

function remove(){

}







// notes from guided project 
// SELECT  
//     c.ContactName CustomerName,
//     e.FirstName EmployeeFirstName,
//     e.LastName EmployeeLastName
// FROM "Order" AS o 
// LEFT // JOIN Employee AS e On o.EmployeeId = e.id
// JOIN Customer AS c ON o.CustomerId = c.id
// WHERE o.Id = 16608;

//different type of joins in squl
// inner join is the default (sometimes nothing will get returned)
// left join


// router.get("users/:id/posts", (req, res, next)=> {
//     try{
//              //after moving to model and creating function
//             //const post = await db.findPostByUserId(req.params.id)
//         const posts =  await db("posts")
//             .innerJoin("users", "users.id", "posts.user_id")
//             .where("posts.user_id", req.params.id)
//             .select("posts.id", "posts.contents", "users.username")
//     }
//     catch(err){
//         next(err)
//     }
// })

// function findPostsByUserId(userId){
//     return db("posts")
//         .innerJoin("users", "users.id", "posts.user_id")
//         .where("posts.user_id", userId)
//         .select("posts.id", "posts.contents", "users.username")
// }