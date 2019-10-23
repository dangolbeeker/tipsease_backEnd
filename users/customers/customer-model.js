const db = require('../../data/db-config')


module.exports = {
    find,
    findById,
    add,
    findBy,
    remove,
    // addBudget,
    // findService
}


function find(){
    return db('customers')
}

async function add(customer){
    const [id] = await db('customers').insert(customer)
    return findById(id)
}

function findById(id){
    return db('customers')
        .where({ id })
        .first()
}

function findBy(filter) {
    return db('customers').where(filter);
}

function remove(id) {
    return db('customers')
        .where('id', id)
        .del();
}

function addBudget(balance, id){
    return db('serviceWorker')
        .update(balance)
        .where({id})
}

function findByIdService(id){
    return db('serviceWorker')
        .where({ id })
        .first()
}

function findService(){
    return db('serviceWorker')
}

//balance