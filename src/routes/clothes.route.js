"use strict";

const express = require("express");
const { Clothes } = require("../models/index");
const router = express.Router();

// Routes
// Retreiving all the clothes records from the database
router.get("/clothes", getClothes);
// Adding a piece of clothes
router.post("/clothes", addPiece);
//finding one piece of clothes
router.get("/clothes/:id", getOneCloth);
// Update one record
router.put("/clothes/:id", updateOneCloth);
// Delete one record
router.delete("/clothes/:id", deleteHandler);

// Handlers
async function getClothes(req, res) {
  const clothes = await Clothes.findAll();
  res.status(200).json(clothes);
}

async function addPiece(req, res) {
  const newPiece = req.body;
  const clothPiece = await Clothes.create(newPiece);
  res.status(201).json(clothPiece);
}

async function getOneCloth(req, res) {
  const id = +req.params.id;
  const selected = await Clothes.findOne({ where: { id: id } });
  if (!selected) {
    res.status(404).send("No entries with this ID where found");
  } else {
    res.status(200).json(selected);
  }
}

async function updateOneCloth(req, res) {
  const id = +req.params.id;
  const updatedInfo = req.body;
  const updatedRecord = await Clothes.update(updatedInfo, {
    where: { id: id },
    returning: true,
  });
  res.status(201).json(updatedRecord[1][0]);
}

async function deleteHandler(req, res) {
  const id = +req.params.id;
  const deletedRecord = await Clothes.destroy({
    where: { id: id },
    returning: true,
  });
  // In case we want to return null, we can return the below line
  // the result of searching for the deleted id will be null
  const deleted = await Clothes.findOne({ where: { id: id } });
  res.status(204).send(`${deletedRecord} row was deleted from the database`);
}

module.exports = router;
