// controllers/subcategoryController.js
const SubCategory = require('../models/subcategoryModel');

module.exports = {
    getAllSubCategories: async (req, res) => {
    try {
      const subcategories = await SubCategory.getAll();
      res.json(subcategories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getSubCategoryById: async (req, res) => {
    try {
      const { id } = req.params;
      const subcategories = await SubCategory.getById(id);
      if (subcategories) {
        res.json(subcategories);
      } else {
        res.status(404).json({ error: 'Subcategory not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createSubCategory: async (req, res) => {
    try {
      const subcategoryId = await SubCategory.create(req.body);
      res.status(201).json({ id: subcategoryId });
      
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message });
    }
  },

  updateSubCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await SubCategory.update(id, req.body);
      if (updated) {
        res.json({ message: 'Subcategory updated successfully' });
      } else {
        res.status(404).json({ error: 'Subcategory not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteSubCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await SubCategory.delete(id);
      if (deleted) {
        res.json({ message: 'Subcategory deleted successfully' });
      } else {
        res.status(404).json({ error: 'Subcategory not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
