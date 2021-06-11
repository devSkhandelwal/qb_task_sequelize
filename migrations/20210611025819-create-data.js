"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Data", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      last: {
        type: Sequelize.STRING,
      },
      buy: {
        type: Sequelize.STRING,
      },
      sell: {
        type: Sequelize.STRING,
      },
      volume: {
        type: Sequelize.STRING,
      },
      base_unit: {
        type: Sequelize.STRING,
      },
      quote_unit: {
        type: Sequelize.STRING,
      },
      low: {
        type: Sequelize.STRING,
      },
      high: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      open: {
        type: Sequelize.FLOAT,
      },
      at: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        default: Date.now,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        default: Date.now,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Data");
  },
};
