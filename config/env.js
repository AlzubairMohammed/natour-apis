const Sequelize = require("sequelize");
module.exports = new Sequelize("hultia_core", "root", "noPass123", {
  host: "localhost",
  dialect: "mysql",
  sync: true,
});
