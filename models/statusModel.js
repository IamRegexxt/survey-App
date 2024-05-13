// models/statusModel.js
const db = require('./db');

class Status {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM status');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM status WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(status) {
    const { name, value } = status;
    const [result] = await db.query('INSERT INTO status (name, value) VALUES (?, ?)', [name, value]);
    return result.insertId;
  }

  static async update(id, status) {
    const { name, value } = status;
    const [result] = await db.query('UPDATE status SET name = ?, value = ? WHERE id = ?', [name, value, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM status WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Status;
