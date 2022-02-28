"use strict";

const Clothes = (sequelize, DataTypes) =>
  sequelize.define("clothes", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
    },
  });

module.exports = Clothes;
