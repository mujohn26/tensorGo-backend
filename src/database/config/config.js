require('dotenv').config();

module.exports.development = {
  username: "root",
  password: "root",
  database: "tensor_dev",
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
