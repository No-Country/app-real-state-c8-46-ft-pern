const router = require('express').Router() ;

const passport = require('passport')
const propertyServices = require('./property.services') ;

const upload = require('../libs/storage') ;
const adminValidate = require('../middlewares/role.middleware') ;
require('../middlewares/auth.middleware')(passport)


//PERF: routes for my reviews

router.route('/me')
    .get(passport.authenticate('jwt', {session: false}),propertyServices.getMyProperties)
    .post(passport.authenticate('jwt', {session: false}),
        upload.single('image'),
    propertyServices.createProperty) 

router.route('/me/:propertyId')
    .delete(passport.authenticate('jwt', {session: false}),propertyServices.deleteMyProperty)
    .patch(passport.authenticate('jwt', {session: false}),propertyServices.editMyProperty)

//routes for admin
router.post('/image/:propertyId', passport.authenticate('jwt', {session: false}),
            adminValidate,
            upload.single('image'),
            propertyServices.addImage  )
    

router.route('/:propertyId')
    .get(passport.authenticate('jwt', {session: false}),adminValidate,propertyServices.getPropertyById)
    .patch(passport.authenticate('jwt', {session: false}),adminValidate,propertyServices.editProperty)
    .delete(passport.authenticate('jwt', {session: false}),adminValidate,propertyServices.deleteProperty)




router.route('/')
    .get(propertyServices.getAllProperties)

module.exports = router

