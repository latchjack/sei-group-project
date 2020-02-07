const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Trail = require('../models/trail')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'Astara',
          email: 'astara@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        },
        {
          username: 'Ellen',
          email: 'ellen@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        },
        {
          username: 'Rory',
          email: 'rory@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        },
        {
          username: 'Latch',
          email: 'latch@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(createdUsers => {
      return Trail.create([
        {
          name: 'Snakes in Hydeing',
          directions: 'W2 2UH',
          clues: ['You\'re a trail blazer- visit the royal geographical society and follow the road north.', 'A serpent Hydes in the grass to your left. Have a visit!', 'Find its sister by the water and ask her for a gin and tonic!'],
          image: 'https://live.staticflickr.com/795/41372147681_474b2acda4_b.jpg',
          weatherFactor: true,
          user: createdUsers[0]
        },
        {
          name: 'General Assembly Trail',
          directions: 'E1 7PT',
          clues: ['Find the chef and keep him on your right as you turn the corner.', 'This is Major Tom to Ground Control- there\'s something to my left and it\'s floating in a most peculiar way.', 'From below it looks very different today!'],
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiATmRAoabIWz6dVqdIT2bsYv1CfaFxj6KdMJyvP8nPxN_jadl',
          weatherFactor: false,
          user: createdUsers[0]
        },
        {
          name: 'A Stable For Your Steed',
          directions: 'RM6 4HY',
          clues: ['Here your metal steed quenches its thirst.', 'As you exit, look right.', 'Tall I stand amidst the green. Look near my feet- it will be seen.'],
          image: 'https://media.timeout.com/images/105223912/1372/772/image.jpg',
          weatherFactor: true,
          user: createdUsers[3]
        }
      ])
    })
    .then(createdTrails => console.log(`${createdTrails.length} trails created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})