var Sequelize = require('sequelize');


const sequelize = new Sequelize(
  'sql7391261', // database
  'sql7391261', // user / usuario
  'M2k6Acepm7', //password
  {
    host: 'sql7.freesqldatabase.com',
    dialect: 'mysql'
    ,
    
  }
  
);

module.exports = sequelize;