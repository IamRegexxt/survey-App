// models/instructionsModel.js
const db = require('./db');

class Instructions {
  static async getByQuestionId(questionId) {
    const [rows] = await db.query('SELECT * FROM instructions WHERE question_id = ?', [questionId]);
    return rows[0];
  }

  static async create(instruction) {
    const { description, question_id } = instruction;
    const [result] = await db.query('INSERT INTO instructions (description, question_id) VALUES (?, ?)', [description, question_id]);
    return result.id;
  }
}

module.exports = Instructions;
