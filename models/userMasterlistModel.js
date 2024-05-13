// models/userMasterlistModel.js
const db = require('./db');

class UserMasterlist {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM user_masterlist');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM user_masterlist WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(user) {
    const { email, status_id } = user;
    const [result] = await db.query('INSERT INTO user_masterlist (email, status_id) VALUES (?, ?)', [email, status_id]);
    return result.insertId;
  }

  static async update(id, user) {
    const { email, status_id } = user;
    const [result] = await db.query('UPDATE user_masterlist SET email = ?, status_id = ? WHERE id = ?', [email, status_id, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM user_masterlist WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = UserMasterlist;
