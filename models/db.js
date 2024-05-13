const mysql = require('mysql2');

// Create connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'survey',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export pool for reuse
module.exports = pool.promise();
