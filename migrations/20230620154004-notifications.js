"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.createTable("notifications", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        body: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("notifications", "title"),
      queryInterface.removeColumn("notifications", "type"),
      queryInterface.removeColumn("notifications", "body"),
      queryInterface.removeColumn("notifications", "id"),
    ]);
  },
};
