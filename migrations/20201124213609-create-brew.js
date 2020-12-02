"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("brews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "recipes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      targetVolumeInLiters: {
        type: Sequelize.INTEGER,
      },
      timeStartMash: {
        type: Sequelize.DATE,
      },
      timeStartFiltration: {
        type: Sequelize.DATE,
      },
      timeStartBoil: {
        type: Sequelize.DATE,
      },
      volumeEndOfBoilingL: {
        type: Sequelize.FLOAT,
      },
      timeStartFermentation: {
        type: Sequelize.DATE,
      },
      pitchingTemperature: {
        type: Sequelize.FLOAT,
      },
      volumeEndOfFermentationInL: {
        type: Sequelize.FLOAT,
      },
      timeStartConditioning: {
        type: Sequelize.DATE,
      },
      timeEndConditioning: {
        type: Sequelize.DATE,
      },
      comments: {
        type: Sequelize.TEXT,
      },
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
    await queryInterface.dropTable("brews");
  },
};
