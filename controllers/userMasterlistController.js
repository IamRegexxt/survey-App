// controllers/userMasterlistController.js
const UserMasterlist = require('../models/userMasterlistModel');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await UserMasterlist.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserMasterlist.getById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const userId = await UserMasterlist.create(req.body);
      res.status(201).json({ id: userId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await UserMasterlist.update(id, req.body);
      if (updated) {
        res.json({ message: 'User updated successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await UserMasterlist.delete(id);
      if (deleted) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
