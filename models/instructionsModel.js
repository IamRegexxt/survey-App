// models/instructionsModel.js
const db = require('./db');

class Instructions {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM instructions');
    return rows;
  }

  static async create(instruction) {
    const { description } = instruction;
    const [result] = await db.query('INSERT INTO instructions (description) VALUES (?)', [description]);
    return result.id;
  }
}

module.exports = Instructions;
