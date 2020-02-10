/* global api, describe, it, expect, beforeEach, afterEach */

const Trail = require('../../models/trail')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const testUserData = [{
  username: 'test',
  email: 'test@email',
  password: 'test',
  passwordConfirmation: 'test'
}, {
  username: 'testTwo',
  email: 'testTwo@email',
  password: 'test',
  passwordConfirmation: 'test'

}]

describe('PUT /trails/:id', () => {
  let token, incorrectToken, trail

  beforeEach(done => {
    User.create(testUserData)
      .then(users => {
        token = jwt.sign({ sub: users[0]._id }, secret, { expiresIn: '6h' }) 
        return Trail.create({
          name: 'Snakes in Hydeing',
          directions: 'W2 2UH',
          clueOne: 'You\'re a trail blazer- visit the royal geographical society and follow the road north.', 
          clueTwo: 'A serpent Hydes in the grass to your left. Have a visit!', 
          clueThree: 'Find its sister by the water and ask her for a gin and tonic!',
          image: 'https://live.staticflickr.com/795/41372147681_474b2acda4_b.jpg',
          weatherFactor: true,
          user: users[0]
        })
      })
      .then(createdTrail => {
        trail = createdTrail
        done()
      })
  })  

  afterEach(done => {
    User.deleteMany()
      .then(() => Trail.deleteMany())
      .then(() => done())
  }) 
  
  it('should return a 401 response without a token', done => {
    api.put(`/api/trails/${trail._id}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 202 response with a token', done => {
    api.put(`/api/trails/${trail._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.status).to.eq(202)
        done()
      })
  })

  it('should return an object', done => {
    api.put(`/api/trails/${trail._id}`) 
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
      .end((err, res) =>  {
        expect(res.body).to.contain.keys([
          '_id',
          'name',
          'directions',
          'clueOne',
          'clueTwo',
          'clueThree',
          'image',
          'weatherFactor',
          'user',
          'comments',
          'likes',
          'completion'  
        ])
        done()
      })
  })

  it('should return the correct data types', done => {
    api.put(`/api/trails/${trail._id}`) 
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        const trail = res.body 
        expect(trail._id).to.be.a('string')
        expect(trail.name).to.be.a('string')
        expect(trail.directions).to.be.a('string')
        expect(trail.clueOne).to.be.a('string')
        expect(trail.clueTwo).to.be.a('string')
        expect(trail.clueThree).to.be.a('string')
        expect(trail.image).to.be.a('string')
        expect(trail.weatherFactor).to.be.a('boolean')
        expect(trail.user).to.be.an('string')
        expect(trail.comments).to.be.an('array')
        expect(trail.likes).to.be.an('array')
        expect(trail.completion).to.be.a('array')
        done()
      })
  })   

  it('should return a 401 response with a token for a user that did not create the resource', done => {
    api.put(`/api/trails/${trail._id}`)
      .set('Authorization', `Bearer ${incorrectToken}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })


})
