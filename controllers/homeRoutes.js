const router = require('express').Router();
const { User, Favorites} = require('../models');
const withAuth = require('../utils/auth');

// ============Homepage=================
router.get('/', async (req, res) => {

    // Pass serialized data and session flag into template
    res.render('homepage');
  
});
// =======================================

// ===========Profile Page=============
// Use withAuth middleware to prevent access to route
router.get('/recipe', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('recipe', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// =======================================

// ====== Login page ==================
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/recipe');
    return;
  }

  res.render('login');
});
// =======================================

// double check 
// ==========Favorite Page===============
router.get('/favorite', async (req, res) => {
  try {
    const favoriteData = await Favorites.findAll({
     where: {
      user_id: req.session.user_id
     }
      
    });
  
    const favorite = favoriteData.map((fav) => fav.get({plain:true}));
    console.log(favorite, "favorites");
    res.render('favorite', {
      favorite,
      //to stay logged in
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// =======================================

//===== Favorite Id =================
//double check this
router.get('/favorite/:id', async (req, res) => {
  try {
    const favoriteData = await Favorites.findByPk(req.params.id);

    if (!favoriteData) {
      res.status(404).json({ message: 'No favorite recipe found with this id!' });
      return;
    }

    const favorite = favoriteData.get({ plain: true });
    console.log(favorite);
    res.render('favoriteId', {
      favorite,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// =======================================

module.exports = router;
