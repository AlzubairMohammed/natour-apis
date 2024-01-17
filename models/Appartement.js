"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appartement extends Model {
    static associate(models) {
      Appartement.hasMany(models.Image, { foreignKey: "appartement_id" });
    }
  }
  Appartement.init(
    {
      city: DataTypes.INTEGER,
      area: DataTypes.INTEGER,
      type: DataTypes.INTEGER,
      street_name: DataTypes.STRING,
      building_name: DataTypes.STRING,
      building_no: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      owner_name: DataTypes.STRING,
      owner_phone: DataTypes.STRING,
      lat: DataTypes.STRING,
      lng: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Appartement",
      timestamps: false,
    }
  );
  return Appartement;
};
