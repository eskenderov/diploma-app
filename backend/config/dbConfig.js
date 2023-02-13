module.exports = {
  db: 'thesis-bd',
  user: 'root',
  password: '',
  dialect: 'mysql',
  host: 'localhost',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
