const express = require('express')

const userAction = require('../src/user')
const usersAction = require('../src/users')

const taskAction = require('../src/task')
const tasksAction = require('../src/tasks')

// Export users actions
module.exports.usersRoutes = express.Router()
  // Define users actions
  .get('/', usersAction.list)

// Export users actions
module.exports.userRoutes = express.Router()
  // Define user actions
  .post('/', userAction.create)
  .put('/:id', userAction.update)
  .get('/:id', userAction.select)
  .delete('/:id', userAction.remove)

// Export possible actions for a user
module.exports.tasksRoutes = express.Router()
  // Define possible actions for a user
  .get('/', tasksAction.list)

// Export possible actions on a task
module.exports.taskRoutes = express.Router()
  // Define possible actions on a task
  .get('/', taskAction.create)
  .put('/:id', taskAction.update)
  .get('/:id', taskAction.select)
  .delete('/:id', taskAction.remove)
