const express = require('express');
const { addFavorite, removeFavorite, getUserFavorites } = require('../controllers/favoriteController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, addFavorite);
router.post('/remove', authMiddleware, removeFavorite);
router.get('/list', authMiddleware, getUserFavorites);

module.exports = router;

