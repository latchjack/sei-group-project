const router = require('express').Router()

const trails = require('../controllers/trails')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/trails')
  .get(trails.index)
  .post(secureRoute, trails.create)

router.route('/trails/:id')
  .get(trails.show)
  .put(secureRoute, trails.update)
  .delete(secureRoute, trails.destroy)

router.route('/trails/:id/comments')
  .post(secureRoute, trails.commentCreate)

router.route('/trails/:id/comments/:commentId')
  .delete(secureRoute, trails.commentDelete)

router.route('/trails/:id/complete')
  .post(secureRoute, trails.completion)

router.route('/trails/:id/like')
  .get(secureRoute, trails.like)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router