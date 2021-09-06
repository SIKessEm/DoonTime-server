const options = require('./boot')
const {Pool} = require('pg')

module.exports = new Pool({
  user: options.pg_user,
  host: options.pg_host,
  database: options.pg_database,
  password: options.pg_password,
  port: options.pg_port,
})
