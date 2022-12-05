/**
 * Auth va a contener las rutas de autorizacion y autenticacion 
*  ---> Login
*  ----> Register
*  ----> Recovery Password
*  ---> Verify User
*   
 */

const router = require('express').Router();

const { registerUser, forgotPassword } = require('../users/users.services') ;
const authServices = require('./auth.services')


router.post('/register', registerUser)
router.post('/login', authServices.login)
router.patch('/forgot_password', forgotPassword)

module.exports = router



