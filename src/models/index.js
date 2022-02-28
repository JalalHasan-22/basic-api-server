"use strict";
require("dotenv").config();

const { Sequelize, DataTypes } = require("sequelize");
const clothes = require("./clothes.model");
const food = require("./food.model");
const POSTGRES_URL =
  process.env.DATABASE_URL || `postgresql://jalal:3713@localhost:5432/class03`;
const sequelizeOptions = {
   dialectOptions: {
     ssl: {
       require: process.env.DATABASE_URL ? true : false,
       rejectUnauthorized: false,
     },
   },
};

const sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

module.exports = {
  db: sequelize,
  Clothes: clothes(sequelize, DataTypes),
  Food: food(sequelize, DataTypes),
};
