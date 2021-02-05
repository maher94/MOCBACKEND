var Sequelize = require('sequelize');


const sequelize = new Sequelize(
  'sql7391060', // database
  'sql7391060', // user / usuario
  '1u1viBu3G3', //password
  {
    host: 'sql7.freemysqlhosting.net',
    dialect: 'mysql'
    ,
    
  }
  
);

module.exports = sequelize;