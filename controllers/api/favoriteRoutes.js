const router = require('express').Router();
const { Favorites } = require('../../models');

// double check
// stores favorite
router.post('/recipe', async (req, res) => {
    try {
      const storeFavorite = req.body;
  
      const favoriteData = await Favorites.create(storeFavorite);
      res.status(200).json(favoriteData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // double check the where clause
  // deletes favorite
  router.delete('/:id', async (req, res) => {
    try {
      const destroyFavorite = await Favorites.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!destroyFavorite) {
        res.status(404).json({ message: 'No favorite recipe found with this id!' });
        return;
      }
  
      res.status(200).json(destroyFavorite);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;