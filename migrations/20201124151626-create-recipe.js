"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("recipes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      imageURL: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      ABV: { type: Sequelize.FLOAT, allowNull: false },
      IBU: { type: Sequelize.INTEGER, allowNull: false },
      OGinPlato: { type: Sequelize.FLOAT },
      FGinPlato: { type: Sequelize.FLOAT, allowNull: false },
      DesiredCarbonationInGramsPerLiter: { type: Sequelize.FLOAT },
      colorInEBC: { type: Sequelize.INTEGER },
      LiquorToGristRatio: { type: Sequelize.FLOAT, allowNull: false },
      yeastStrain: { type: Sequelize.STRING, allowNull: false },
      PitchRateInGramsperLiter: { type: Sequelize.FLOAT },
      BoilDurationInMin: { type: Sequelize.INTEGER, allowNull: false },
      FermentationTemperature: { type: Sequelize.FLOAT },
      comments: { type: Sequelize.TEXT },
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
    await queryInterface.dropTable("recipes");
  },
};
