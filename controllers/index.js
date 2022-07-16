const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/', homeRoutes);
router.use('/favorite', apiRoutes);
router.use('/api', apiRoutes);

module.exports = router;
