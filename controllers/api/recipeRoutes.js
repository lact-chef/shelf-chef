const router = require('express').Router();
const { Favorites } = require('../../models');

// double check
// stores favorite
router.post('/', async (req, res) => {
    try {
      const favoriteData = await Favorites.create(req.body);
      res.status(200).json(favoriteData);
    } catch (err) {
      res.status(404).json(err);
    }
  });

  module.exports = router;