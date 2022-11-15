/**
 * Auth va a contener las rutas de autorizacion y autenticacion 
*  ---> Login
*  ----> Register
*  ----> Recovery Password
*  ---> Verify User
*   
 */

const router = require('express').Router();

const { registerUser } = require('../users/users.services') ;
const authServices = require('./auth.services')


router.post('/register', registerUser)
router.post('/login', authServices.login)

module.exports = router



