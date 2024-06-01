// models/commentModel.js
const db = require('./db');

class Comment {
  static async getAllByResponseId(responseId) {
    const [rows] = await db.query('SELECT * FROM comments WHERE response_id = ?', [responseId]);
    return rows;
  }

  static async create(comment) {
    const { comment: content, response_id } = comment;
    const [result] = await db.query('INSERT INTO comments (response_id, comment) VALUES (?, ?)', [response_id, content]);
    return result.id;
  }

  static async update(id, comment) {
    const { comment: content } = comment;
    console.log(id, content);
    const [result] = await db.query('UPDATE comments SET comment = ? WHERE id = ?', [content, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM comments WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Comment;
