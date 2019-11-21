
exports.up = function(knex) {
    return knex.schema.createTable('customers', tbl => {
        tbl.increments()
        tbl.string('username', 120)
            .notNullable()
            .unique();
        tbl.string('password', 120)
            .notNullable()
        tbl.string('FirstName', 120)
            .notNullable()
        tbl.string('LastName', 120)
            .notNullable()
        tbl.string('email', 120)
            .notNullable()
            .unique();
        tbl.boolean('customerOrService')
    })
    .createTable('serviceWorker', tbl => {
        tbl.increments()
        tbl.string('username', 120)
            .notNullable()
            .unique();
        tbl.string('password', 120)
            .notNullable()
        tbl.string('FirstName', 120)
            .notNullable()
        tbl.string('LastName', 120)
            .notNullable()
        tbl.string('email', 120)
            .notNullable()
            .unique();
        tbl.boolean('customerOrService')
        
        
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('customers')
        .dropTableIfExists('serviceWorker')
};
