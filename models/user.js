'use strict';
// const {Sequelize,DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
 const User =sequelize.define('User',{
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {
    freezeTableName: true

  });
  return User;
};