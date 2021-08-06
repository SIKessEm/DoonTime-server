const express = require('express')

const UserController = require('../src/user')
const TaskController = require('../src/task')

// Export users actions
module.exports.userRoutes = express.Router()
  // Define user actions
  .get('/', UserController.list)
  .post('/', UserController.add)
  .put('/:id', UserController.set)
  .get('/:id', UserController.get)
  .delete('/:id', UserController.unset)

// Export possible actions on a task
module.exports.taskRoutes = express.Router()
  // Define possible actions on a task
  .get('/', TaskController.list)
  .post('/', TaskController.add)
  .put('/:id', TaskController.set)
  .get('/:id', TaskController.get)
  .delete('/:id', TaskController.unset)
