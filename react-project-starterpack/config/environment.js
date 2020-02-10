const port = process.env.NODE_ENV || 4000
const dbURI = process.env.MONGOD_DB || 'mongodb://localhost/trail-cache-api'
const secret = process.env.SECRET || 'oh my gosh I want to know'

module.exports = { port, dbURI, secret }