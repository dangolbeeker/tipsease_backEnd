
// const request = require('supertest')
// const customers = require('./customer-router')


// describe('GET /', () => {

//     it('return status 200', () => {
//         return request(customers)
//             .get('/')
//             .then(res => {
//                 expect(res.status).toBe(200)
//             })
//     })


//     it('get all customers', function (done){
//         request(customers)
//             .get('/')
//             .set(('Accept', 'application/json'))
//             .expect('Content-Type', /json/i)
//             .expect(200, done)
//     })

// })