"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Appartements", "created_at", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });

    await queryInterface.changeColumn("Appartements", "updated_at", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Appartements", "created_at", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    await queryInterface.changeColumn("Appartements", "updated_at", {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
};
