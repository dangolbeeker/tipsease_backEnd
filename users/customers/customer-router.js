const router = require('express').Router();
const db = require('./customer-model')


router.get('/', (req, res) => {
    db.find()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            console.log(err)
        })
})



module.exports = router