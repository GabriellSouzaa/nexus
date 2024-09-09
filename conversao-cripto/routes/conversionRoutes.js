const express = require('express');
const { convertCurrency, getUserConversions } = require('../controllers/conversionController');
 const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/convert', authMiddleware, convertCurrency);
 router.get('/history', authMiddleware, getUserConversions);

module.exports = router;
