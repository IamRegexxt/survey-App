// models/scaleModel.js
const db = require('./db');

class Scale {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM scales_response');
    return rows;
  }

  static async create(answer) {
    const { answer: content, question_id } = answer;
    const [result] = await db.query('INSERT INTO scales_response (answer, question_id) VALUES (?, ?)', [content, question_id]);
    return result.id;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM scales_response WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Scale;
