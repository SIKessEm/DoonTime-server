const fs = require('fs')
const path = __dirname + `/../.env.${process.env.NODE_ENV || 'development'}`

if (fs.existsSync(path)) {
  config = require('dotenv').config({
    path: path
  });
} else config = require('dotenv').config()

if (config.error)
  throw config.error

module.exports = config.parsed
