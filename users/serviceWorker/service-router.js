const router = require('express').Router();
const db = require('./service-model')

const bcrypt = require('bcryptjs')





router.get('/', (req, res) => {
    db.find()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {console.log(err)})
})


router.post('/', (req, res) => {
    const service = req.body
    const hash = bcrypt.hashSync(service.password, 12)
    service.password = hash

    db.add(service)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {console.log(err)})
})







module.exports = router