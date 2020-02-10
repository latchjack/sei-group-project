const User = require('../../models/user')

const loginDataCorrect = {
  email: 'test@test.test',
  password: 'test'
}

const loginDataIncorrect = {
  email: 'test@test.test',
  password: 'wrong'
}


describe('POST / login', () => {

  beforeEach(done => {
    User.create({
      username: 'test',
      email: 'test@test.test', // the login data objects above are based on this user
      password: 'test',
      passwordConfirmation: 'test'
    })
      .then(() => done())
  })
  
})


