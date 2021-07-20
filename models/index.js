'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize,DataTypes} = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


   let sequelize = new Sequelize(config.database, config.username, config.password, {
    host:config.host,
   dialect:config.dialect,
   pool:{
     max:10,
       min:0,
       idle:10000
   },
   define:{
      timestamps:false
  }
  });



fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./user')(sequelize, DataTypes);
module.exports = db;

db.sequelize.sync({ force: false }).then(() => {
  console.log(" re-sync db.");
});
