"use strict";

const Food = (sequelize, DataTypes) =>
  sequelize.define("food", {
    foodName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    catagory: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

module.exports = Food;
