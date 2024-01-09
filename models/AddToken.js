"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AddToken extends Model {
    static associate(models) {
      // define association here
    }
  }
  AddToken.init(
    {
      token: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AddToken",
      tableName: "tokens",
    }
  );
  return AddToken;
};
