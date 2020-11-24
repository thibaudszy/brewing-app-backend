"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.belongsTo(models.user, { as: "author" });
      recipe.belongsToMany(models.user, {
        through: "usersToRecipes",
        foreignKey: "userId",
        as: "recipeInLibrary",
      });
      recipe.hasMany(models.maltAdditon);
      recipe.hasMany(models.hopAddition);
      recipe.hasMany(models.mashStep);
    }
  }
  recipe.init(
    {
      name: { types: DataTypes.STRING, allowNull: false },
      author: { userId: DataTypes.INTEGER, allowNull: false },
      imageURL: { types: DataTypes.STRING },
      description: { types: DataTypes.TEXT },
      ABV: { types: DataTypes.FLOAT, allowNull: false },
      IBU: { types: DataTypes.INTEGER, allowNull: false },
      OGinPlato: { types: DataTypes.FLOAT },
      FGinPlato: { types: DataTypes.FLOAT, allowNull: false },
      DesiredCarbonationInGramsPerLiter: { types: DataTypes.FLOAT },
      colorInEBC: { types: DataTypes.INTEGER },
      LiquorToGristRatio: { types: DataTypes.FLOAT, allowNull: false },
      yeastStrain: { types: DataTypes.STRING, allowNull: false },
      PitchRateInGramsperLiter: { types: DataTypes.FLOAT },
      BoilDurationInMin: { types: DataTypes.INTEGER, allowNull: false },
      FermentationTemperature: { types: DataTypes.FLOAT },
      comments: { types: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
