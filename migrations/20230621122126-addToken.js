"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("tokens", "content", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("tokens", "id", {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("tokens", "content"),
      queryInterface.removeColumn("tokens", "id"),
    ]);
  },
};
