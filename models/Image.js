"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Installment, { foreignKey: "installment_id" });
    }
  }
  Image.init(
    {
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Image",
      timestamps: false,
    }
  );
  return Image;
};
