/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/user')

const loginDataCorrect = { 
  email: 'testMe@test.test',
  password: 'test'
}

const loginDataIncorrect = { 
  email: 'testMe@test.test',
  password: 'wrong'
}

describe('POST /login', () => {

  beforeEach(done => { 
    User.create({
      username: 'testMe',
      email: 'testMe@test.test', 
      password: 'test',
      passwordConfirmation: 'test'
    })
      .then(() => done())
  })

  afterEach(done => { 
    User.deleteMany().then(() => done())
  })

  it('should return a 401 unauthorised response for incorrect login details', done => { 
    api.post('/api/login')
      .send(loginDataIncorrect)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 202 accepted response for correct login details', done => { 
    api.post('/api/login')
      .send(loginDataCorrect)
      .end((err, res) => {
        expect(res.status).to.eq(202)
        done()
      })
  })

  it('should return an object if request is correct', done => { // testing keys of returned object on correct details
    api.post('/api/login')
      .send(loginDataCorrect)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return an object with a message and token keys if request is correct', done => { //testing the keys of that objects
    api.post('/api/login')
      .send(loginDataCorrect)
      .end((err, res) => {
        expect(res.body).to.contains.keys([
          'message',
          'token'
        ])
        done()
      })
  })

  it('should return the correct data types', done => { // testing the types of those keys
    api.post('/api/login')
      .send(loginDataCorrect)
      .end((err, res) => {
        expect(res.body.message).to.be.a('string')
        expect(res.body.token).to.be.a('string')
        done()
      })
  })

})


