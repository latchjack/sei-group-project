/* global api, describe, it, expect, beforeEach, afterEach */
const Trail = require('../../models/trail')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const testTrail = {
  name: 'Snakes in Hydeing',
  directions: 'W2 2UH',
  clueOne: 'You\'re a trail blazer- visit the royal geographical society and follow the road north.', 
  clueTwo: 'A serpent Hydes in the grass to your left. Have a visit!', 
  clueThree: 'Find its sister by the water and ask her for a gin and tonic!',
  image: 'https://live.staticflickr.com/795/41372147681_474b2acda4_b.jpg',
  weatherFactor: true
}

const testUserData = {
  username: 'test',
  email: 'test@email',
  password: 'test',
  passwordConfirmation: 'test'
}

describe('POST /trails', () => {

  let token

  beforeEach(done => {
    User.create(testUserData)
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
        done()
      })
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => Trail.deleteMany())
      .then(() => done())
  })

  it('should return a 401 response without a token', done => {
    api.post('/api/trails')
      .send(testTrail)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 201 response with a token', done => {
    api.post('/api/trails')
      .set('Authorization', `Bearer ${token}`)
      .send(testTrail)
      .end((err, res) => {
        expect(res.status).to.eq(201)
        done()
      })
  })

  it('should return an object', done => {
    api.post('/api/trails')
      .set('Authorization', `Bearer ${token}`)
      .send(testTrail)
      .end((err, res) => {
        expect(res.body).to.contains.keys([
          '_id',
          'name',
          'directions',
          'clueOne',
          'clueTwo',
          'clueThree',
          'image',
          'weatherFactor',
          'comments',
          'likes',
          'completion',
          'user'
        ])
        done()
      })
  })

  it('should return the correct data types', done => {
    api.post('/api/trails')
      .set('Authorization', `Bearer ${token}`)
      .send(testTrail)
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
        expect(trail.comments).to.be.an('array')
        expect(trail.likes).to.be.an('array')
        expect(trail.completion).to.be.an('array')
        expect(trail.user).to.be.an('object')
        done()
      })
  })

})