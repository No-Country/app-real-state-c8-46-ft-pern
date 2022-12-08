const router = require('express').Router() ;
const upload = require('../libs/storage') ;

const userServices = require('./users.services')  ;
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware') ;

require('../middlewares/auth.middleware')(passport)

/**
 * rutas raiz
 *
 */

router.get('/', passport.authenticate('jwt', {session: false}),
            adminValidate, 
            userServices.getAllUsers)
// router.post('/', userServices.registerUser)

//? ruta de informacion propia del usuario logeado
router.route('/me')
    .get( passport.authenticate('jwt', {session: false}), 
        userServices.getMyUser )
    .patch( passport.authenticate('jwt', {session: false}),
        userServices.updateMyUser)
    .delete( passport.authenticate('jwt', {session: false}),
        userServices.deletMyUser)
    .post( passport.authenticate('jwt', {session: false}),
        upload.single('image'),
        userServices.postProfileImage)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}),
    userServices.getUserById)

    .patch( passport.authenticate('jwt', {session: false}),
        adminValidate,
        userServices.patchUser)

    .delete( passport.authenticate('jwt', {session: false}),
        adminValidate,
        userServices.deleteUser)



module.exports = router
