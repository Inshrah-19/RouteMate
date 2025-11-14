const express = require('express');
const favoritesController = require('../controllers/favoritesController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/user', authMiddleware, favoritesController.getUserFavorites);
router.post('/add', authMiddleware, favoritesController.addFavorite);
router.delete('/:favoriteId', authMiddleware, favoritesController.removeFavorite);

module.exports = router;