var Sequelize = require('sequelize');


const sequelize = new Sequelize(
  'id16100695_moc', // database
  'id16100695_moussaoptique', // user / usuario
  '%Gtr0uI0YRB90DkZ', //password
  {
    host: 'databases.000webhost.com',
    dialect: 'mysql'
    ,
    
  }
  
);

module.exports = sequelize;