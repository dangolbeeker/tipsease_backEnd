const knex = require('knex');
const config = require('../knexfile.js');

const env = process.env.DB_ENV || 'development';

module.exports = knex(config[env]);


// const knex = require('knex');

// const knexConfig = require('../knexfile.js');

// module.exports = knex(knexConfig.development);