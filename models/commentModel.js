// models/commentModel.js
const db = require('./db');

class Comment {
  static async getAllByQuestionId(questionId) {
    const [rows] = await db.query('SELECT * FROM comments WHERE question_id = ?', [questionId]);
    return rows;
  }

  static async create(comment) {
    const { question_id, content } = comment;
    const [result] = await db.query('INSERT INTO comments (question_id, comment) VALUES (?, ?)', [question_id, content]);
    return result.insertId;
  }

  static async update(id, comment) {
    const { content } = comment;
    const [result] = await db.query('UPDATE comments SET comment = ? WHERE id = ?', [content, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM comments WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Comment;
