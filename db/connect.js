const { Sequelize } = require('sequelize');

const options = {
  dialect: 'postgres',
  logging: console.log,
};

const dbUrl = 'postgres://db_admin:admin_31!@localhost:5432/prob'

const sequelize = new Sequelize(dbUrl, options);



module.exports = sequelize;


