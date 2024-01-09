'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Installments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      have_family: {
        type: Sequelize.INTEGER
      },
      salary: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.INTEGER
      },
      ads_number: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      more_info: {
        type: Sequelize.STRING
      },
      owner_name: {
        type: Sequelize.STRING
      },
      owner_phone: {
        type: Sequelize.STRING
      },
      expect_rent_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Installments');
  }
};