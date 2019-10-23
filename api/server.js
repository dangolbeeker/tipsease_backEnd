const express = require('express')
const server = express()
const Customers = require('../users/customers/customer-router')
const ServiceWorker = require('../users/serviceWorker/service-router')


server.use(express.json())
server.use('/api/customers', CORS, Customers)
server.use('/api/serviceworker', CORS, ServiceWorker)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


server.get('/', (req, res) => {
    res.status(200).json('Hello there');
});



module.exports = server



function CORS(req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
    next();
  };