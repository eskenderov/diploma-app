const dbConfig = require('../config/dbConfig');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => console.log('connected..'))
  .catch((err) => console.log('Not connected: ', err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel')(sequelize, DataTypes);
db.reviews = require('./reviewModel')(sequelize, DataTypes);
db.users = require('./userModel')(sequelize, DataTypes);
db.comments = require('./commentModel')(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => console.log('yes re-sync done!'))
  .catch((err) => console.log(err));

module.exports = db;
