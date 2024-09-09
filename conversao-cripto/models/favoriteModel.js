const db = require('../config/db');

const addFavorite = (userId, crypto, callback) => {
  const sql = 'INSERT INTO favorites (user_id, crypto) VALUES (?, ?)';
  db.query(sql, [userId, crypto], callback);
};

const removeFavorite = (userId, crypto, callback) => {
  const sql = 'DELETE FROM favorites WHERE user_id = ? AND crypto = ?';
  db.query(sql, [userId, crypto], callback);
};

const getFavoritesByUserId = (userId, callback) => {
  const sql = 'SELECT crypto FROM favorites WHERE user_id = ?';
  db.query(sql, [userId], callback);
};

module.exports = { addFavorite, removeFavorite, getFavoritesByUserId };
