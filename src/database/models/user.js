'use strict';
const {
  Model
} = require('sequelize');
var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    gender: Sequelize.STRING,
    status: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};