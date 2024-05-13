// controllers/statusController.js
const Status = require('../models/statusModel');

module.exports = {
  getAllStatuses: async (req, res) => {
    try {
      const statuses = await Status.getAll();
      res.json(statuses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getStatusById: async (req, res) => {
    try {
      const { id } = req.params;
      const status = await Status.getById(id);
      if (status) {
        res.json(status);
      } else {
        res.status(404).json({ error: 'Status not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createStatus: async (req, res) => {
    try {
      const statusId = await Status.create(req.body);
      res.status(201).json({ id: statusId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await Status.update(id, req.body);
      if (updated) {
        res.json({ message: 'Status updated successfully' });
      } else {
        res.status(404).json({ error: 'Status not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Status.delete(id);
      if (deleted) {
        res.json({ message: 'Status deleted successfully' });
      } else {
        res.status(404).json({ error: 'Status not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
