const router = require('express').Router() ;

const passport = require('passport')
const propertyServices = require('./property.services') ;
const adminValidate = require('../middlewares/role.middleware') ;
require('../middlewares/auth.middleware')(passport)


//PERF: routes for my reviews
router.route('/me')
    .get(passport.authenticate('jwt', {session: false}),propertyServices.getMyProperties)
    .post(passport.authenticate('jwt', {session: false}),
    propertyServices.createProperty) 

router.route('/me/:propertyId')
    .delete(passport.authenticate('jwt', {session: false}),propertyServices.deleteMyProperty)
    .patch(passport.authenticate('jwt', {session: false}),propertyServices.editMyProperty)

//routes for admin
router.route('/:propertyId')
    .get(passport.authenticate('jwt', {session: false}),adminValidate,propertyServices.getPropertyById)
    .patch(passport.authenticate('jwt', {session: false}),adminValidate,propertyServices.editProperty)
    .delete(passport.authenticate('jwt', {session: false}),adminValidate,propertyServices.deleteProperty)

router.route('/')
    .get(passport.authenticate('jwt', {session: false}),adminValidate,propertyServices.getAllProperties)

module.exports = router

