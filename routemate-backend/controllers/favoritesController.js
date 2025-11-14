const Favorite = require('../models/Favorite');
const Route = require('../models/Route');

// Get user's favorite routes
exports.getUserFavorites = async (req, res) => {
  try {
    const userId = req.user.id;
    
    const favorites = await Favorite.findAll({
      where: { userId },
      include: [{ model: Route }],
    });

    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add route to favorites
exports.addFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const { routeId } = req.body;

    // Check if already favorited
    const existing = await Favorite.findOne({ where: { userId, routeId } });
    if (existing) {
      return res.status(400).json({ message: 'Already in favorites' });
    }

    const favorite = await Favorite.create({ userId, routeId });
    res.status(201).json({ message: 'Added to favorites', favorite });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove from favorites
exports.removeFavorite = async (req, res) => {
  try {
    const { favoriteId } = req.params;
    const userId = req.user.id;

    const favorite = await Favorite.findByPk(favoriteId);
    if (!favorite || favorite.userId !== userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await favorite.destroy();
    res.status(200).json({ message: 'Removed from favorites' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};