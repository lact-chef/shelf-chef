const router = require('express').Router();
const { User, Favorite } = require('../../models');

//double check this
router.get('/:id', async (req, res) => {
  try {
    const fvrteId = await Favorite.findByPk(req.params.recipeID,{
      where: {
        recipeID: req.params.recipeID,
      },
    });

    if (!fvrteId) {
      res.status(404).json({ message: 'No favorite recipe found with this id!' });
      return;
    }

    const favoriteId = fvrteId.get({ plain: true });

    res.render('favoriteId', {
      ...favoriteId
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;