const express = require('express')
const server = express()
const Customers = require('../users/customers/customer-router')


server.use(express.json())
server.use('/api/customers', Customers)


server.get('/', (req, res) => {
    res.status(200).json('Hello there');
});



module.exports = server