const mysql = require('mysql2');

// Create connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'myConnection',
  password: '',
  database: 'surveydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export pool for reuse
module.exports = pool.promise();
