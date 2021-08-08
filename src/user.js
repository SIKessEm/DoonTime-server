const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../res/models/user')

// List users
module.exports.list = async (req, res) => {
  User.findOne({
    where: {
      name: req.body.name
    }
  }).then(result => {
    if(result) {
      res.status(409).json({
        message: 'Name already exists'
      })
    } else {
      User.findOne({
        where: {
          email: req.body.email
        }
      }).then(result => {
        if(result) {
          res.status(409).json({
            message: 'Email already exists'
          })
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
              const user = {
                name: req.body.name,
                email: req.body.email,
                password: hash
              }
              User.create(user).then(result => {
                res.status(201).json({
                  message: 'User created successfully'
                })
              }).catch(err => {
                res.status(500).json({
                  message: 'Something went wrong'
                })
              })
            })
          })
        }
      })
    }
  }).catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
}

// Add a user
module.exports.add = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message)
  }
}

// Get a user
module.exports.get = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message)
  }
}

// Set a user
module.exports.set = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message)
  }
}

// Unset a user
module.exports.unset = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message)
  }
}
