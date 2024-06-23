const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new item" });
});

// DELETE an item
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a item" });
});

// UPDATE a item
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a item" });
});

module.exports = router;
