const router = require('express').Router() ;

const passport = require('passport')
const bankAccount = require('../bankAccount/bankAccount.services') ;

require('../middlewares/auth.middleware')(passport)


router.route('/bank-account')
    .post( bankAccount.createBankAccount )

module.exports = router

