const db = require('../../data/db-config')


module.exports = {
    find,
    findById,
    add,
    findBy,
    remove,
    addBudget,
    findByIdService
}


function find() {
    return db('serviceWorker')
}

async function add(customer){
    const [id] = await db('serviceWorker').insert(customer)
    return findById(id)
}

function findById(id){
    return db('serviceWorker')
        .where({ id })
        .first()
}

function findBy(filter) {
    return db('serviceWorker').where(filter);
}

function remove(id) {
    return db('serviceWorker')
        .where('id', id)
        .del();
}

function addBudget(balance, id){
    return db('serviceWorker')
        .update({balance: balance})
        .where({id})
}

function findByIdService(id){
    return db('serviceWorker')
        .where({ id })
        .first()
}