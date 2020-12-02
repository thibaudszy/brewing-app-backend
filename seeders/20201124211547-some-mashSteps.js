"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "mashSteps",
      [
        {
          recipeId: 1,
          stepNo: 1,
          temperature: 63,
          durationInMin: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          stepNo: 2,
          temperature: 72,
          durationInMin: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          stepNo: 3,
          temperature: 76,
          durationInMin: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          stepNo: 1,
          temperature: 65,
          durationInMin: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("mashSteps", null, {});
  },
};
