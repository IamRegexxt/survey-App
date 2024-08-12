// models/instructionsModel.js
const db = require('./db');

class Instructions {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM instructions');
    return rows;
  }

  static async create(instruction) {
    const { instruction: description, category_id } = instruction;
    const [result] = await db.query('INSERT INTO instructions (description, category_id) VALUES (?)', [description, category_id]);
    return result.id;
  }
}

module.exports = Instructions;
