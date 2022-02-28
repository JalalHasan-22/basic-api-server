"use strict";

const express = require("express");
const app = new express();
const logger = require("./middleware/loggers");
const errorHandler = require("./error-handlers/500");
const notFound = require("./error-handlers/404");
const clothesRoutes = require("./routes/clothes.route");
const foodRoutes = require("./routes/food.route");

//Middleware and Routers
app.use(express.json());
app.use(logger);
app.use(clothesRoutes);
app.use(foodRoutes);

// Home Endpoint
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Home Page");
});

const start = (port) => {
  app.listen(port, () => console.log(`server listening on port ${port}`));
};

// Error Handlers
app.use(errorHandler);
app.use("*", notFound);

module.exports = {
  app: app,
  start: start,
};
