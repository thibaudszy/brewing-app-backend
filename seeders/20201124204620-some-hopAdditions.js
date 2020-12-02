"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "hopAdditions",
      [
        {
          recipeId: 1,
          name: "Chinook",
          alphaAcidContent: 12,
          percentageAlphaAcidsFromAddition: 60,
          timeOfAdditionInMinBeforeEndOfBoil: 60,
          isDryHop: false,
          dryHopTimingInPercentageAF: null,
          dryHopRateInGramsPerLitre: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          name: "Citra",
          alphaAcidContent: 13,
          percentageAlphaAcidsFromAddition: 40,
          timeOfAdditionInMinBeforeEndOfBoil: 10,
          isDryHop: false,
          dryHopTimingInPercentageAF: null,
          dryHopRateInGramsPerLitre: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          name: "Citra",
          alphaAcidContent: 13,
          percentageAlphaAcidsFromAddition: null,
          timeOfAdditionInMinBeforeEndOfBoil: null,
          isDryHop: true,
          dryHopTimingInPercentageAF: 80,
          dryHopRateInGramsPerLitre: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          recipeId: 2,
          name: "Magnum",
          alphaAcidContent: 13,
          percentageAlphaAcidsFromAddition: 100,
          timeOfAdditionInMinBeforeEndOfBoil: 50,
          isDryHop: false,
          dryHopTimingInPercentageAF: null,
          dryHopRateInGramsPerLitre: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hopAdditions", null, {});
  },
};
