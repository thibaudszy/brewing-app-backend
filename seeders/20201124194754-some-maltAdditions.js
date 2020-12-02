"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "maltAdditions",
      [
        {
          recipeId: 1,
          name: "Vienna malt",
          percentageOfExtract: 80,
          defaultExtract: 70,
          defaultMoistureInPercentage: 5,
          defaultColorInEBC: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          name: "Munich malt",
          percentageOfExtract: 15,
          defaultExtract: 80,
          defaultMoistureInPercentage: 4,
          defaultColorInEBC: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          name: "Cara50",
          percentageOfExtract: 7.5,
          defaultExtract: 71,
          defaultMoistureInPercentage: 5,
          defaultColorInEBC: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          name: "Vienna malt ",
          percentageOfExtract: 95,
          defaultExtract: 70,
          defaultMoistureInPercentage: 5,
          defaultColorInEBC: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          name: "Carafa 2",
          percentageOfExtract: 5,
          defaultExtract: 65,
          defaultMoistureInPercentage: 3.8,
          defaultColorInEBC: 1150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("maltAdditions", null, {});
  },
};
