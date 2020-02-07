const mongoose = require('mongoose')

//no unique validation
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
} , {
  timestamps: true
})

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

//our completion form that will be accessed from the SHOW page and then added to the trailSchema
const completionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  image: { type: String, required: true }
}, {
  timestamps: true 
})

const trailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  directions: { type: String, required: true },
  clues: { type: [String], required: true },
  image: { type: String, required: true },
  weatherFactor: { type: Boolean, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ],
  likes: [ likeSchema ],
  completion: [ completionSchema ]
}, {
  timestamps: true
})

module.exports = mongoose.model('Trail', trailSchema)