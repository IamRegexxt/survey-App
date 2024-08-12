// models/subcategoryModel.js
const db = require('./db');

class Category {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM subcategories');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM subcategories WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(subcategories) {
    const { subcategories: text, category_id } = subcategories;
    const [result] = await db.query('INSERT INTO subcategories (subcategory, category_id) VALUES (?, ?)', [text, category_id]);
    return result.id;
  }

  static async update(id, subcategories) {
    const { subcategories: text, category_id } = subcategories;
    const [result] = await db.query('UPDATE subcategories SET subcategory = ?, category_id = ? WHERE id = ?', [text, category_id, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM subcategories WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Category;
