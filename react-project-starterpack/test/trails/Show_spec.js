/* global api, describe, it, expect, beforeEach, afterEach */
const Trail = require('../../models/trail')
const User = require('../../models/user')

describe('GET /trails/:id', () => {

  let trail

  beforeEach(done => {
    User.create({
      username: 'Rory',
      email: 'Rory@email',
      password: 'pass',
      passwordConfirmation: 'pass'
    })
      .then(user => {
        return Trail.create({
          name: 'Snakes in Hydeing',
          directions: 'W2 2UH',
          clueOne: 'You\'re a trail blazer- visit the royal geographical society and follow the road north.', 
          clueTwo: 'A serpent Hydes in the grass to your left. Have a visit!', 
          clueThree: 'Find its sister by the water and ask her for a gin and tonic!',
          image: 'https://live.staticflickr.com/795/41372147681_474b2acda4_b.jpg',
          weatherFactor: true,
          user
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

  it('should return a 404 not found for an invalid trail id', done => {
    api.get('/api/trails/1234')
      .end((err, res) => {
        expect(res.status).to.eq(404)
        done()
      })
  })

  it('should return a 200 response', done => {
    api.get(`/api/trails/${trail._id}`) 
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an object', done => {
    api.get(`/api/trails/${trail._id}`) 
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return the correct fields', done => {
    api.get(`/api/trails/${trail._id}`)
      .end((err, res) => {
        expect(res.body).to.contains.keys([
          'name',
          'directions',
          'clueOne',
          'clueTwo',
          'clueThree',
          'image',
          'weatherFactor',
          'user'
        ])
        done()
      })
  })

  it('should return the correct data types', done => {
    api.get(`/api/trails/${trail._id}`)
      .end((err, res) => {
        const trail = res.body
        expect(trail.name).to.be.a('string')
        expect(trail.directions).to.be.a('string')
        expect(trail.clueOne).to.be.a('string')
        expect(trail.clueTwo).to.be.a('string')
        expect(trail.clueThree).to.be.a('string')
        expect(trail.image).to.be.a('string')
        expect(trail.weatherFactor).to.be.a('boolean')
        expect(trail.user).to.be.an('object')
        done()
      })
  })
})

