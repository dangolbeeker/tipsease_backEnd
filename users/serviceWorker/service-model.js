const db = require('../../data/db-config')


module.exports = {
    find,
    findById,
    add,
    findBy
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