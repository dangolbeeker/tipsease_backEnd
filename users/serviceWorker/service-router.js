const router = require('express').Router();
const db = require('./service-model')

const bcrypt = require('bcryptjs')
const makeToken = require('../../token/token')





router.get('/', (req, res) => {
    db.find()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {console.log(err)})
})


router.post('/signup', (req, res) => {
    const service = req.body
    const hash = bcrypt.hashSync(service.password, 12)
    service.password = hash

    db.add(service)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => res.status(500).json({err: 'Missing creds'}))
})


router.post('/login', (req, res) => {
    const { username, password } = req.body

    db.findBy({username})
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = makeToken(user)
                res.status(200).json({note: `user ${user.username} has a token` , token})
            } else {
                res.status(401).json({ message: 'Invalid creds my dude' });
            }
        })
        .catch(err => res.status(500).json({err: 'Missing creds'}))
})




module.exports = router