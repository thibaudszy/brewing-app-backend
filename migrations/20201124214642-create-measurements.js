"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("measurements", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brewId: { type: Sequelize.INTEGER, allowNull: false },
      stage: {
        type: Sequelize.ENUM(
          "mash",
          "strong wort",
          "start of boil",
          "end of boil",
          "fermentation",
          "conditioning"
        ),
        allowNull: false,
      },
      date: { type: Sequelize.DATE, allowNull: false },
      gravityInPlato: Sequelize.FLOAT,
      pH: Sequelize.FLOAT,
      temperature: Sequelize.FLOAT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("measurements");
  },
};
