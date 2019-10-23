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


router.put('/:id/tip', (req, res) => {
    const { id } = req.params
    const { balance, username, company } = req.body
    // const oldBalance = () => {
    //     db.findByIdService(id).then(response => {return response})
    // }
    // console.log(oldBalance())


    db.findByIdService(id)
        .then(worker => {
            // console.log(worker)
            if(username !== worker.username || company !== worker.company){
                res.status(404).json({message: 'Could not find Service Worker at that company'})
            } else if(balance === null || !balance) {
                res.status(404).json({message: 'not feeling so giving?'})
            } else {
                db.addBudget(balance, id)
                    .then(response => {
                        res.status(200).json({message: `You have given a wonderful tip of $${balance}, to ${username}. Thank you on their behalf!`})
                    })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update worker' })
        })


    // db.addBudget({balance, username, company})
    //     .then(response => {
    //         if(!balance && !username && !company){
    //             res.status(400).json({message: 'Please fill out all fields'})
    //         } else {
    //             res.status(200).json({Message: `Tip given to ${response.username}`})
    //         }
    //     })
    //     .catch(err => {res.status(500).json({error: 'Failed to give proper info'})})
})



module.exports = router