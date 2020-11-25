"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class brew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      brew.belongsTo(models.user);
      brew.belongsTo(models.recipe);
      // brew.hasMany(models.measurement);
    }
  }
  brew.init(
    {
      recipeId: { type: DataTypes.INTEGER, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      targetVolumeInLiters: DataTypes.INTEGER,
      timeStartMash: DataTypes.DATE,
      timeStartFiltration: DataTypes.DATE,
      timeStartBoil: DataTypes.DATE,
      volumeEndOfBoilingL: DataTypes.FLOAT,
      timeStartFermentation: DataTypes.DATE,
      pitchingTemperature: DataTypes.FLOAT,
      volumeEndOfFermentationInL: DataTypes.FLOAT,
      timeStartConditioning: DataTypes.DATE,
      timeEndConditioning: DataTypes.DATE,
      comments: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "brew",
    }
  );
  return brew;
};
