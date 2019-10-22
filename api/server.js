const express = require('express')
const server = express()
const Customers = require('../users/customers/customer-router')
const ServiceWorker = require('../users/serviceWorker/service-router')


server.use(express.json())
server.use('/api/customers', Customers)
server.use('/api/serviceworker', ServiceWorker)


server.get('/', (req, res) => {
    res.status(200).json('Hello there');
});



module.exports = server