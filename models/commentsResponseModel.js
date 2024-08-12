// models/commentModel.js
const db = require('./db');

class Comment {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM comment_response');
    return rows;
  }

  static async create(answer) {
    const { answer: content, question_id } = answer;
    const [result] = await db.query('INSERT INTO comment_response (answer, question_id) VALUES (?, ?)', [content, question_id]);
    return result.id;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM comment_response WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Comment;
