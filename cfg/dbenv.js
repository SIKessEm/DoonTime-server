const options = require('./options')

module.exports = {
  dialect: options.db_dialect,
  host: options.db_host,
  port: options.db_port,
  username: options.db_user,
  password: options.db_password,
  database: options.db_name
}
