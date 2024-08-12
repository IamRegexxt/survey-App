// controllers/scaleController.js
const Scale = require('../models/scaleResponseModel');

module.exports = {
  getAllScales: async (req, res) => {
    try {
      const scales = await Scale.getAll();
      res.json(scales);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createScale: async (req, res) => {
    try {
      const scaleId = await Scale.create(req.body);
      res.status(201).json({ id: scaleId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteScale: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Scale.delete(id);
      if (deleted) {
        res.json({ message: 'Scale deleted successfully' });
      } else {
        res.status(404).json({ error: 'Scale not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
