'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Task, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        hooks:true
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',

    defaultScope: {
      attributes: {
        exclude: [
          'email',
          'password',
        ]
      },
    },

    scopes: {
      login: function() {
        return {
          attributes: {
            include: [
              'email',
              'password'
            ]
          }
        }
      }
    }

  });
  return User;
};
