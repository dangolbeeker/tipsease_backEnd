const db = require('../../data/db-config')


module.exports = {
    find,
    findById,
    add,
    findBy
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