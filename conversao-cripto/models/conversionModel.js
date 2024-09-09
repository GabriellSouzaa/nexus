const db = require('../config/db');

const addConversion = (userId, crypto, amount, brl, usd, callback) => {
  const sql = 'INSERT INTO conversions (user_id, crypto, brl, usd, amount) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [userId, crypto, brl, usd, amount], callback);
};

const getConversionsByUserId = (userId, callback) => {
  const sql = 'SELECT * FROM conversions WHERE user_id = ?';
  db.query(sql, [userId], callback);
};

module.exports = { addConversion, getConversionsByUserId };
