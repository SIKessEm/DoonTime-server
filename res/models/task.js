'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        through: 'TaskOwner'
      })
    }
  };
  Task.init({
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
