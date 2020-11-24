"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mashStep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mashStep.belongsTo(models.recipe);
    }
  }
  mashStep.init(
    {
      recipeId: { type: DataTypes.INTEGER, allowNull: false },
      stepNo: { type: DataTypes.INTEGER, allowNull: false },
      temperature: { type: DataTypes.FLOAT, allowNull: false },
      durationInMin: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "mashStep",
    }
  );
  return mashStep;
};
