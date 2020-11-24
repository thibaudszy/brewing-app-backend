"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Thibaud",
          lastName: "Szymczak",
          email: "thibaudszy@gmail.com",
          password: "1234",
          language: "En-GB",
          gender: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bob",
          lastName: "Lenon",
          email: "boblenon@gmail.com",
          password: "1234",
          language: "En-GB",
          gender: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Emma",
          lastName: "Lupulus",
          email: "a@gmail.com",
          password: "1234",
          language: "Fr-FR",
          gender: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
