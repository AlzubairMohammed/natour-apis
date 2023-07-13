"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("notifications", "created_at", {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("notifications", "created_at");
  },
};
