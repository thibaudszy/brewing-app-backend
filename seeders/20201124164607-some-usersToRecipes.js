"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "libraries",
      [
        {
          id: 11,
          userId: 1,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          userId: 1,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          userId: 2,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("libraries", null, {});
  },
};
