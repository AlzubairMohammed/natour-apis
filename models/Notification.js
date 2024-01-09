"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate(models) {
      // define association here
    }
  }
  Notification.init(
    {
      title: DataTypes.STRING,
      customer_id: DataTypes.INTEGER,
      type: DataTypes.STRING,
      body: DataTypes.STRING,
      created_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Notification",
      tableName: "notifications",
    }
  );
  return Notification;
};
