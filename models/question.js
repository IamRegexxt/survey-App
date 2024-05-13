const db = require('./db');

class Question {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM questions');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM questions WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(question) {
    const { instructions, question: text, category_id } = question;
    const [result] = await db.query('INSERT INTO questions (instructions, question, category_id) VALUES (?, ?, ?)', [instructions, text, category_id]);
    return result.insertId;
  }

  static async update(id, question) {
    const { instructions, question: text, category_id } = question;
    const [result] = await db.query('UPDATE questions SET instructions = ?, question = ?, category_id = ? WHERE id = ?', [instructions, text, category_id, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM questions WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Question;