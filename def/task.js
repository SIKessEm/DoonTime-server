const {DataTypes} = require('sequelize')

module.exports = {
  title : {
    type: DataTypes.STRING,
    allowNull: false
  },
  description : {
    type: DataTypes.TEXT
  }
}
