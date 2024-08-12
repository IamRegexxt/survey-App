// models/choiceModel.js
const db = require('./db');

class Analysis {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM data_analysis');
    return rows;
  }

  static async create(title) {
    const [result] = await db.query('INSERT INTO data_analysis (title) VALUES (?)', [title]);
    return result.id;
  }

  static async update(id, title) {
    const [result] = await db.query('UPDATE data_analysis SET title = ? WHERE id = ?', [title, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM data_analysis WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Analysis;
