const router = require('express').Router();
const { Favorites } = require('../../models');
const withAuth = require('../../utils/auth');

  // double check the where clause
  // deletes favorite
  router.delete('/:id', withAuth, async (req, res) => {
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