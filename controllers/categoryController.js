const { Category, Item } = require('../models');
const Joi = require('joi');

// Validation schema
const categorySchema = Joi.object({
  name: Joi.string().required()
});

// Add a new category
exports.addCategory = async (req, res) => {
  const { error } = categorySchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.details[0].message });

  const { name } = req.body;

  try {
    // Check if a category with the same name already exists
    const existingCategory = await Category.findOne({ where: { name } });
    if (existingCategory) {
      return res.status(400).json({ success: false, message: 'Category with this name already exists' });
    }

    // Create the category if it doesn't exist
    const category = await Category.create({ name });
    res.json({ success: true, code: 200, data: category });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


// Get category details and related items
exports.getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findOne({
      where: { id },
      include: [{ model: Item }]
    });

    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    res.json({ success: true, code: 200, data: { category, items: category.Items } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
