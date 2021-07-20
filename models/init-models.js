var DataTypes = require("sequelize").DataTypes;
var _User = require("./user")

function initModels(sequelize) {
  var User = _User(sequelize, DataTypes);


  return {
    User
  };
}
module.exports = initModels;
