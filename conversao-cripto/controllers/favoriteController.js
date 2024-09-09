const Favorite = require('../models/favoriteModel');

const addFavorite = (req, res) => {
  const { crypto } = req.body;
  Favorite.addFavorite(req.userId, crypto, (err) => {
    if (err) return res.status(500).json({ error: 'Erro ao adicionar favorito' });
    res.status(200).json({ message: 'Criptomoeda favoritada' });
  });
};

const removeFavorite = (req, res) => {
  const { crypto } = req.body;
  Favorite.removeFavorite(req.userId, crypto, (err) => {
    if (err) return res.status(500).json({ error: 'Erro ao remover favorito' });
    res.status(200).json({ message: 'Criptomoeda desfavoritada' });
  });
};

const getUserFavorites = (req, res) => {
  Favorite.getFavoritesByUserId(req.userId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar favoritos' });
    res.status(200).json(results);
  });
};

module.exports = { addFavorite, removeFavorite, getUserFavorites };
