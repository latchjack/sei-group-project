const Trail = require('../models/trail')

//must add controller for creating completion form

function index(req, res) {
  Trail
    .find()
    .populate('user')
    .then(foundTrails => res.status(200).json(foundTrails))
    .catch(err => console.log(err))
}

function create(req, res) {
  req.body.user = req.currentUser
  Trail
    .create(req.body)
    .then(createdTrail => res.status(201).json(createdTrail))
    .catch(err => console.log(err))
}

function show(req, res) {
  Trail
    .findById(req.params.id)
    .populate('user')
    .then(trail => res.status(200).json(trail))
    .catch(err => console.log(err))
}

function update(req, res, next) {
  Trail
    .findById(req.params.id)
    .then(trail => {
      if (!trail) return res.status(404).json({ message: 'Not Found' })
      if (!trail.user.equals(req.currentUser._id)) {
        return res.status(401).json({ message: 'Unauthorized' })
      } else {
        Object.assign(trail, req.body)
        trail.save()
          .then(updatedTrail => res.status(202).json(updatedTrail))
      }
    })
    .catch(next)
}

function destroy(req, res) {
  Trail
    .findById(req.params.id)
    .then(trail => {
      if (!trail) return res.status(404).json({ message: 'Not Found' })
      if (!trail.user.equals(req.currentUser._id)) {
        return res.status(401).json({ message: 'Unauthorized' })
      } else {
        trail.remove()
        return res.sendStatus(204)
      }
    })
    .catch(err => res.json(err))
}

//new controller for completion form
function completion(req, res, next) {
  req.body.user = req.currentUser
  Trail 
    .findById(req.params.id)
    .then(trail => {
      if (!trail) return res.status(404).json({ message: 'Not Found' })
      trail.completion.push(req.body)
      return trail.save()
    })
    .then(trail => res.status(201).json(trail))
    .catch(next)
}

function commentCreate(req, res, next) {
  req.body.user = req.currentUser
  Trail 
    .findById(req.params.id)
    .then(trail => {
      if (!trail) return res.status(404).json({ message: 'Not Found' })
      trail.comments.push(req.body)
      return trail.save()
    })
    .then(trail => res.status(201).json(trail))
    .catch(next)
}

function commentDelete(req, res) {
  Trail
    .findById(req.params.id)
    .then(trail => {
      if (!trail) return res.status(404).json({ message: 'Not Found' })
      const comment = trail.comments.id(req.params.commentId)
      if (!comment.user.equals(req.currentUser._id)) {
        return res.status(401).json({ message: 'Unauthorized' })
      } else {
        comment.remove()
        return trail.save().then(() => res.sendStatus(204))
      }
    })
    .catch(err => res.json(err))
}

// * GET /api/trails/:id/like
function like(req, res) {
  Trail
    .findById(req.params.id)
    .then(trail => {
      if (!trail) return res.status(404).json({ message: 'Not Found ' })
      if (trail.likes.some(like => like.user.equals(req.currentUser._id))) return trail
      trail.likes.push({ user: req.currentUser })
      return trail.save()
    })
    .then(trail => res.status(202).json(trail))
    .catch(err => res.json(err))
}

module.exports = { index, create, show, update, destroy, commentCreate, commentDelete, completion, like }