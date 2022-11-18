const router = require('express').Router() ;

const passport = require('passport')
const bankAccount = require('../bankAccount/bankAccount.services') ;

require('../middlewares/auth.middleware')(passport)


//PERF: crear una cuenta de banco
router.route('/bank-account')
    .post( bankAccount.createBankAccount )

module.exports = router

