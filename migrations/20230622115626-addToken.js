"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("tokens", "token", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("tokens", "id", {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }),
      queryInterface.addColumn("tokens", "user_id", {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("tokens", "token"),
      queryInterface.removeColumn("tokens", "user_id"),
      queryInterface.removeColumn("tokens", "id"),
    ]);
  },
};
