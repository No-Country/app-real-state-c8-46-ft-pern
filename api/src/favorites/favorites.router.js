const router = require('express').Router() ;

const passport = require('passport')
const favoritesServices = require('./favorites.services') ;
const adminValidate = require('../middlewares/role.middleware') ;
require('../middlewares/auth.middleware')(passport)


//PERF: routes for my reviews
router.route('/me')
    .get(passport.authenticate('jwt', {session: false}),favoritesServices.getMyFavorites)
     

router.route('/me/:favoriteId')
    .delete(passport.authenticate('jwt', {session: false}),favoritesServices.deleteMyFavorite)
    .post(passport.authenticate('jwt', {session: false}),
        favoritesServices.createFavorites)

//routes for admin
router.route('/:favoriteId')
    .delete(passport.authenticate('jwt', {session: false}),adminValidate,favoritesServices.deleteFavorite)

router.route('/')
    .get(passport.authenticate('jwt', {session: false}),adminValidate,favoritesServices.getAllFavorites)

module.exports = router
