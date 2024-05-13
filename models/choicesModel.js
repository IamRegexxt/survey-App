// models/choiceModel.js
const db = require('./db');

class Choice {
  static async getAllByQuestionId(questionId) {
    const [rows] = await db.query('SELECT * FROM choices WHERE question_id = ?', [questionId]);
    return rows;
  }

  static async create(questionId, optionn) {
    const [result] = await db.query('INSERT INTO choices (question_id, optionn) VALUES (?, ?)', [questionId, optionn]);
    return result.id;
  }

  static async update(id, optionn) {
    const [result] = await db.query('UPDATE choices SET optionn = ? WHERE id = ?', [optionn, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM choices WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Choice;
