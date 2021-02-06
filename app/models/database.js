var Sequelize = require('sequelize');


const sequelize = new Sequelize(
  '99.000webhost.io', // database
  'id16100695_moussaoptique', // user / usuario
  '%Gtr0uI0YRB90DkZ', //password
  {
    host: 'localhost',
    dialect: 'mysql'
    ,
    
  }
  
);

module.exports = sequelize;