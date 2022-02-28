"use strict";
require("dotenv").config();
const { db } = require("./src/models/index");

const { app, start } = require("./src/server");

db.sync().then(() => {
  start(process.env.PORT || 3001);
});
