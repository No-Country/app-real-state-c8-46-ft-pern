const router = require('express').Router() ;
const orderServices = require('../order/order.services') ;

const passport = require('passport')
require('../middlewares/auth.middleware')(passport)

router.route('/buy/:property_id')
    .post(passport.authenticate('jwt', {session: false}), orderServices.postOrder)

module.exports = router
