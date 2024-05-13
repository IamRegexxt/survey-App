// models/scaleModel.js
const db = require('./db');

class Scale {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM scale');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM scale WHERE id = ?', [id]);
    return rows[0];
  }

  static async getByQuestionId(questionId) {
    const [rows] = await db.query('SELECT * FROM scale WHERE question_id = ?', [questionId]);
    return rows;
  }

  static async create(scale) {
    const { description, value, question_id } = scale;
    const [result] = await db.query('INSERT INTO scale (description, value, question_id) VALUES (?, ?, ?)', [description, value, question_id]);
    return result.insertId;
  }

  static async update(id, scale) {
    const { description, value, question_id } = scale;
    const [result] = await db.query('UPDATE scale SET description = ?, value = ?, question_id = ? WHERE id = ?', [description, value, question_id, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM scale WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Scale;
