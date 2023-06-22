const sequelize = require("../config/env");
const Sequelize = require("sequelize");

const Model = Sequelize.Model;

class addToken extends Model {}
addToken.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    token: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "AddToken",
    freezeTableName: true,
    tableName: "tokens",
    timestamps: false,
  }
);

module.exports = addToken;
