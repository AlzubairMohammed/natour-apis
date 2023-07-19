const sequelize = require("../config/env");
const Sequelize = require("sequelize");

const Model = Sequelize.Model;

class Notification extends Model {}
Notification.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    body: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
    modelName: "Notification",
    freezeTableName: true,
    tableName: "notifications",
    timestamps: false,
  }
);

module.exports = Notification;
