const express = require("express");
const item = require("../models/itemModel");
const router = express.Router();

// GET all items
router.get("/", (req, res) => {
  res.json({ mssg: "GET all items" });
});

// GET a single item
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single item" });
});

// POST a new item
router.post("/", async (req, res) => {
  const { title, number } = req.body;

  try {
    const newItem = await item.create({ title, number });
    res.status(200).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE an item
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a item" });
});

// UPDATE an item
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a item" });
});

module.exports = router;
