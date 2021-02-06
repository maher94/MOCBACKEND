var Sequelize = require('sequelize');


const sequelize = new Sequelize(
  'id16100695_moc', // database
  'id16100695_moussaoptique', // user / usuario
  '%Gtr0uI0YRB90DkZ', //password
  {
    host: '99.000webhost.io',
    dialect: 'mysql'
    ,
    
  }
  
);

module.exports = sequelize;