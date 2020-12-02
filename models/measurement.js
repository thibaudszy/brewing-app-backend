"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class measurement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      measurement.belongsTo(models.brew);
    }
  }
  measurement.init(
    {
      brewId: { type: DataTypes.INTEGER, allowNull: false },
      stage: {
        type: DataTypes.ENUM(
          "mash",
          "strong wort",
          "beggining of boil",
          "end of boil",
          "fermentation",
          "conditioning"
        ),
        allowNull: false,
      },
      date: { type: DataTypes.DATE, allowNull: false },
      gravityInPlato: DataTypes.FLOAT,
      pH: DataTypes.FLOAT,
      temperature: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "measurements",
    }
  );
  return measurement;
};
