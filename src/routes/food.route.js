"use strict";

const express = require("express");
const router = express.Router();
const { Food } = require("../models/index");

//Routes
router.get("/food", getFood);
router.post("/food", addFood);
router.get("/food/:id", getOneFood);
router.put("/food/:id", updateOneFood);
router.delete("/food/:id", deleteHandler);

//Handlers
async function getFood(req, res) {
  const food = await Food.findAll();
  res.status(200).json(food);
}

async function addFood(req, res) {
  const newFood = req.body;
  const addedFood = await Food.create(newFood);
  res.status(201).json(addedFood);
}

async function getOneFood(req, res) {
  const id = +req.params.id;
  // if (typeof id !== Number) res.status(500);
  // else {
  const selected = await Food.findOne({ where: { id: id } });
  if (!selected) {
    res.status(404).send("No Entries whith this ID where found");
  } else {
    res.status(200).json(selected);
  }
}
// }

async function updateOneFood(req, res) {
  const id = +req.params.id;
  const updatedInfo = req.body;
  const updatedRecord = await Food.update(updatedInfo, {
    where: { id: id },
    returning: true,
  });
  res.status(201).json(updatedRecord[1][0]);
}

async function deleteHandler(req, res) {
  const id = +req.params.id;
  const deletedRecord = await Food.destroy({ where: { id: id } });
  const deleted = await Food.findOne({ where: { id: id } });
  res.status(204).send(`${deletedRecord} row was deleted from the database`);
}

module.exports = router;
