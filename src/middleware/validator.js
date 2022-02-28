"use strict";

const validator = (req, res, next) => {
  if (!req.params.id) {
    next(`Please enter a valid id`);
  } else {
    next();
  }
};

module.exports = validator;
