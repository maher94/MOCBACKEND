var Sequelize = require('sequelize');


const sequelize = new Sequelize(
  'bkhaxrtmv4jqq7gcn0mp', // database
  'ufoeht8luebxzkwz', // user / usuario
  'HECG9giNjB3OtkO3bYvm', //password
  {
    host: 'bkhaxrtmv4jqq7gcn0mp-mysql.services.clever-cloud.com',
    dialect: 'mysql'
    ,
    
  }
  
);

module.exports = sequelize;
