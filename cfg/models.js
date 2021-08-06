const options = require('./options')

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`${options.database_dialect}://${options.database_user}:${options.database_password}@${options.database_host}:${options.database_port}/${options.database_name}`)

const UserStructure = require('../def/user')
const TaskStructure = require('../def/task')

module.exports.User = sequelize.define('User', UserStructure)
module.exports.Task = sequelize.define('Task', TaskStructure)

(async () => {
  await sequelize.sync()
})()
