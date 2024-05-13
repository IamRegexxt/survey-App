// models/responsesModel.js
const db = require('./db');

class Responses {
  static async getByQuestionId(questionId) {
    const [rows] = await db.query('SELECT * FROM responses WHERE question_id = ?', [questionId]);
    return rows;
  }

  static async create(response) {
    const { question_id, answers } = response;
    const [result] = await db.query('INSERT INTO responses (question_id, answers) VALUES (?, ?)', [question_id, answers]);
    return result.insertId;
  }
}

module.exports = Responses;
