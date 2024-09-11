const sequelize = require("sequelize");
const db = new sequelize("testdb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = db;