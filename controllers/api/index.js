const router = require('express').Router();
const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/recipe', recipeRoutes);
router.use('/favorite', favoriteRoutes);
router.use('/users', userRoutes);

module.exports = router;
