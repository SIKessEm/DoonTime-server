const options = require('./options')

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`${options.database_dialect}://${options.database_user}:${options.database_password}@${options.database_host}:${options.database_port}/${options.database_name}`)

const UserStructure = require('../def/user')
const TaskStructure = require('../def/task')

const User = sequelize.define('User', UserStructure)
const Task = sequelize.define('Task', TaskStructure)

User.hasMany(Task, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

Task.belongsTo(User, {
  as: 'Author',
  through: 'UserTasks'
})

(async () => {
  await sequelize.sync()
})()

module.exports.UserModel = User
module.exports.TaskModel = Task
