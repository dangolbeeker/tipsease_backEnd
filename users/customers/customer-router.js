const router = require('express').Router();
const db = require('./customer-model')

const bcrypt = require('bcryptjs')
const {customerToken} = require('../../token/token')
const blocked = require('./customer-middleware')



router.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });



router.get('/', blocked, (req, res) => {
    db.find()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {console.log(err)})
})


router.get('/:id', blocked, (req, res) => {
    const {id} = req.params

    db.findById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => res.status(500).json({err: 'Missing id'}))
})


router.post('/signup', (req, res) => {
    const customer = req.body
    const hash = bcrypt.hashSync(customer.password, 12)
    customer.password = hash

    db.add(customer)
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
                const token = customerToken(user)
                res.status(200).json({note: `user ${user.username} has a token`, token})
            } else {
                res.status(401).json({ message: 'Invalid creds my dude' });
            }
        })
        .catch(err => res.status(500).json({err: 'Missing creds'}))
})


router.delete('/:id', blocked, (req, res) => {
    db.remove(req.params.id)
        .then(res.status(200).json({message: 'user has been deleted'}))
        .catch(err => res.status(500).json({ message: 'user not able to be deleted' }))
});


module.exports = router