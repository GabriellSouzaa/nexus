const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'crypto_conversion'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

module.exports = db;
