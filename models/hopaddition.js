"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hopAddition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      hopAddition.belongsTo(models.recipe);
    }
  }
  hopAddition.init(
    {
      recipeId: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      alphaAcidContent: DataTypes.FLOAT,
      percentageAlphaAcidsFromAddition: DataTypes.FLOAT,
      timeOfAdditionInMinBeforeEndOfBoil: { type: DataTypes.INTEGER },
      isDryHop: { type: DataTypes.BOOLEAN, allowNull: false },
      dryHopTimingInPercentageAF: { type: DataTypes.INTEGER },
      dryHopRateInGramsPerLitre: { type: DataTypes.FLOAT },
    },

    {
      sequelize,
      modelName: "hopAddition",
    }
  );
  return hopAddition;
};
