const router = require('express').Router() ;

const passport = require('passport')
const reviewServices = require('./review.services') ;
const adminValidate = require('../middlewares/role.middleware') ;
require('../middlewares/auth.middleware')(passport)


//PERF: routes for my reviews
router.route('/me')
    .get(passport.authenticate('jwt', {session: false}),reviewServices.getMyReviews)
    .post(passport.authenticate('jwt', {session: false}),
    reviewServices.createReview)

router.route('/me/:reviewId')
    .delete(passport.authenticate('jwt', {session: false}),reviewServices.deleteMyReview)
    .patch(passport.authenticate('jwt', {session: false}),reviewServices.editMyReview)

//routes for admin
router.route('/:reviewId')
    .get(passport.authenticate('jwt', {session: false}),adminValidate,reviewServices.getReviewById)
    .patch(passport.authenticate('jwt', {session: false}),adminValidate,reviewServices.editReview)
    .delete(passport.authenticate('jwt', {session: false}),adminValidate,reviewServices.deleteReview)

router.route('/')
    .get(passport.authenticate('jwt', {session: false}),adminValidate,reviewServices.getAllReviews)

module.exports = router


