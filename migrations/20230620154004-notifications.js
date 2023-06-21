"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("notifications", "title", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("notifications", "type", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("notifications", "body", {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
      queryInterface.addColumn("notifications", "id", {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
