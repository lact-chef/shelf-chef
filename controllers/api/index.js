const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/favorite', favoriteRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
