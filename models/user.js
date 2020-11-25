"use strict";
const { Sequelize, Model, DataTypes } = require("sequelize");
const { APP_LANGUAGES } = require("../config/constants");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.recipe, { as: "author" });
      user.belongsToMany(models.recipe, {
        through: "usersToRecipes",
        foreignKey: "userId",
        as: "recipeInLibrary",
      });
      user.hasMany(models.brew);
    }
  }
  user.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      language: { type: DataTypes.ENUM([...APP_LANGUAGES]), allowNull: false },
      gender: {
        type: DataTypes.ENUM("male", "female", "other"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
