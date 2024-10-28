const { Item, ItemVolume, Category } = require('../models');
const Joi = require('joi');
const { Op } = require('sequelize');

// Validation schema
const itemSchema = Joi.object({
  name: Joi.string().required(),
  categoryId: Joi.number().required(),
  volumes: Joi.array().items(
    Joi.object({
      value: Joi.number().required(),
      price: Joi.number().required()
    })
  ).min(1).required()
});

// Create or update an item with volumes
exports.createOrUpdateItem = async (req, res) => {
  const { error } = itemSchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.details[0].message });

  const { name, categoryId, volumes } = req.body;

  try {
    // Check if an item with the same name already exists
    const existingItem = await Item.findOne({ where: { name } });
    if (existingItem) {
      return res.status(400).json({ success: false, message: 'Item with this name already exists' });
    }

    // Create the item and associated volumes
    const item = await Item.create({ name, categoryId });

    for (const volume of volumes) {
      await ItemVolume.create({
        itemId: item.id,
        value: volume.value,
        price: volume.price
      });
    }

    // Fetch the item with volumes
    const updatedItem = await Item.findOne({
      where: { id: item.id },
      include: [ItemVolume]
    });

    res.json({ success: true, code: 200, data: updatedItem });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll({ include: [Category, ItemVolume] });
    res.json({ success: true, code: 200, data: { items } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get item details by ID
exports.getItemById = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findOne({
      where: { id },
      include: [ItemVolume]
    });

    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }

    res.json({ success: true, code: 200, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Search items and categories by name
exports.searchItems = async (req, res) => {
  const { query } = req.query;

  try {
    const categories = await Category.findAll({
      where: {
        name: { [Op.like]: `%${query}%` }
      }
    });

    const items = await Item.findAll({
      where: {
        name: { [Op.like]: `%${query}%` }
      }
    });

    res.status(200).json({ success: true, code: 200, data: { categories, items } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
