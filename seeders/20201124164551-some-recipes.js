"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          name: "West Coast IPA",
          authorId: 1,
          imageURL: "https://bit.ly/wcipa1010101",
          description:
            "Bitter and aromatic. Uses a lot of vienna malt for a good malt body. The Citra and Chinook gives it a typical aroma of American IPAs.",
          ABV: 7.5,
          IBU: 70,
          OGinPlato: 16,
          FGinPlato: 2.5,
          DesiredCarbonationInGramsPerLiter: 5.5,
          colorInEBC: 30,
          LiquorToGristRatio: 3,
          yeastStrain: "Safale US-05",
          PitchRateInGramsperLiter: 0.5,
          BoilDurationInMin: 60,
          FermentationTemperature: 25,
          comments:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Awesome stout",
          authorId: 2,
          imageURL: "https://bit.ly/2J3cFm2",
          description: `Stout is a dark, top-fermented beer with a number of variations, including dry stout, oatmeal stout, milk stout, and imperial stout. 
            The first known use of the word stout for beer was in a document dated 1677 found in the Egerton Manuscripts, the sense being that a "stout beer" was a strong beer, 
            not a dark beer. The name porter was first used in 1721 to describe a dark brown beer that had been made with roasted malts. Because of the huge popularity of porters, 
            brewers made them in a variety of strengths. The stronger beers, typically 7% or 8% alcohol by volume (ABV), were called "stout porters", so the history and development of 
            stout and porter are intertwined, and the term stout has become firmly associated with dark beer, rather than just strong beer`,
          ABV: 9,
          IBU: 70,
          OGinPlato: 22,
          FGinPlato: 4.5,
          DesiredCarbonationInGramsPerLiter: 5.5,
          colorInEBC: 70,
          LiquorToGristRatio: 2.5,
          yeastStrain: "Safale US-05",
          PitchRateInGramsperLiter: 1,
          BoilDurationInMin: 60,
          FermentationTemperature: 22,
          comments:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
