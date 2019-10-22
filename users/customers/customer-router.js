const router = require('express').Router();
const db = require('./customer-model')

const bcrypt = require('bcryptjs')





router.get('/', (req, res) => {
    db.find()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {console.log(err)})
})


router.post('/', (req, res) => {
    const customer = req.body
    const hash = bcrypt.hashSync(customer.password, 12)
    customer.password = hash

    db.add(customer)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {console.log(err)})
})



module.exports = router