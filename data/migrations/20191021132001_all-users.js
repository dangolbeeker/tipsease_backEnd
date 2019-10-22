
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
        tbl.string('tagline', 80)
            .notNullable()
        tbl.string('company')
            .notNullable()
        tbl.integer('YearsAtCompany')
            .notNullable()
        tbl.integer('balance')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('customers')
        .dropTableIfExists('serviceWorker')
};
