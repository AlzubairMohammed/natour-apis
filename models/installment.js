"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Installment extends Model {
    static associate(models) {}
  }
  Installment.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      have_family: DataTypes.INTEGER,
      salary: DataTypes.STRING,
      nationality: DataTypes.STRING,
      type: DataTypes.INTEGER,
      ads_number: DataTypes.INTEGER,
      gender: DataTypes.INTEGER,
      city: DataTypes.STRING,
      more_info: DataTypes.STRING,
      owner_name: DataTypes.STRING,
      owner_phone: DataTypes.STRING,
      expect_rent_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Installment",
      timestamps: false,
    }
  );
  return Installment;
};
