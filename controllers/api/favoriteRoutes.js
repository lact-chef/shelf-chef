const router = require('express').Router();
const { Favorites } = require('../../models');


// stores favorite
// functionality goes into the api folder in userRoutes
router.post('/recipe', async (req, res) => {
    try {
      const storeFavorite = req.body;
  
      const favoriteData = await Favorites.create(storeFavorite);
      res.status(200).json(favoriteData);
    } catch (err) {
      res.status(400).json(err);
    }
  });