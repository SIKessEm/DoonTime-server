const crypto = require('crypto')

const options = require('../cfg/options')
const actions = require('../cfg/actions')

const express = require('express')
const server = express()

const http_host = options.http_host
const http_port = options.http_port
const https_port = options.https_port

const cors = require('cors')
const session = require('express-session')

const https = require('https')
const http = require('http')

// Create the session handle
const sessionHandle = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 60000,
  },
  genid: function(req) {
    return crypto.randomBytes(16).toString("hex") // use UUIDs for session IDs
  }
}

if(server.get('env') === 'production') {
  server.set('trust proxy', 1)
  sessionHandle.cookie.secure = true
}

// Add middleware
server.use(cors())
server.use(express.static('res'))
server.use(express.json())
server.use(session(sessionHandle))

// Define routes
server.use('/users', actions.userRoutes)
server.use('/tasks', actions.taskRoutes)

// Access the session as req.session
server.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end(`Welcome to the session demo from ${options.app_name}. Refresh !`)
  }

  if(next) next()
})


// Configure the HTTP server
http.createServer(server).listen(http_port, http_host, () => {
    console.log(`Server HTTP is runned on ${http_host}:${http_port}`)
})
https.createServer([], server).listen(https_port, () => {
    console.log(`Server HTTPS is runned on ${http_host}:${https_port}`)
})
