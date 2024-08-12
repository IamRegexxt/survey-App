// models/commentModel.js
const db = require('./db');

class Comment {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM multiplechoice_responses');
    return rows;
  }

  static async create(answer) {
    const { answer: content, question_id } = answer;
    const [result] = await db.query('INSERT INTO multiplechoice_responses (question_id, answers) VALUES (?, ?)', [question_id, content]);
    return result.id;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM multiplechoice_responses WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Comment;
