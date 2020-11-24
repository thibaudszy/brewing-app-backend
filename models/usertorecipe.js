"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userToRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userToRecipe.belongsTo(models.user);
      userToRecipe.belongsTo(models.recipe);
    }
  }
  userToRecipe.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      recipeId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "userToRecipe",
    }
  );
  return userToRecipe;
};
