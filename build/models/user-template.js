"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a = require("sequelize"), Sequelize = _a.Sequelize, Model = _a.Model, DataTypes = _a.DataTypes;
module.exports = function (sequelize, DataTypes) {
    var user = /** @class */ (function (_super) {
        __extends(user, _super);
        function user() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        user.associate = function (models) {
            //   user.hasMany(models.brew);
            //   user.belongsToMany(models.recipe, {
            //     through: "usersToRecipes",
            //     foreignKey: "productId",
            //   });
        };
        return user;
    }(Model));
    user.init({
    // firstName: { type: DataTypes.STRING, allowNull: false },
    // lastName: { type: DataTypes.STRING, allowNull: false },
    // email: { type: DataTypes.STRING, allowNull: false, unique: true },
    // password: { type: DataTypes.STRING, allowNull: false },
    // preferredLanguage: {
    //   type: DataTypes.ENUM("En-GB, Fr-FR"),
    //   allowNull: false,
    // },
    // gender: {
    //   type: DataTypes.ENUM("male", "female", "other"),
    //   allowNull: false,
    // },
    }, {
        sequelize: sequelize,
        modelName: "user",
    });
    return user;
};
