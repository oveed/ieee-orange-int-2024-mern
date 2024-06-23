const item = require("../models/itemModel");
const mongoose = require("mongoose");

// get all items
const getItems = async (req, res) => {
  const items = await item.find({}).sort({ createdAt: -1 });

  res.status(200).json(items);
};

// get a single item
const getItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }

  const searchedItem = await item.findById(id);

  if (!searchedItem) {
    return res.status(404).json({ error: "No such item" });
  }

  res.status(200).json(searchedItem);
};

// create a new item
const createItem = async (req, res) => {
  const { title, number } = req.body;

  try {
    const newItem = await item.create({ title, number });
    res.status(200).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an item
const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such item" });
  }

  const deletedItem = await item.findOneAndDelete({ _id: id });

  if (!deletedItem) {
    return res.status(400).json({ error: "No such item" });
  }

  res.status(200).json(deletedItem);
};

// update an item
const updateItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such item" });
  }

  const updatedItem = await item.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!updatedItem) {
    return res.status(400).json({ error: "No such item" });
  }

  res.status(200).json(updatedItem);
};

module.exports = {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
};
