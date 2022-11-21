//estrategias --> diferentes maneras de hacer un login

const { jwtSecret } = require('../config');
const { getUserById } = require('../users/users.controllers');

const JwtStrategy = require('passport-jwt').Strategy; //? Passport maneja estrategias para las diferentes autenticaciones
const ExtractJwt = require('passport-jwt').ExtractJwt; //? Extrae los header de la peticion

module.exports = (passport) => {
    const options = {
        jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey : jwtSecret
    };
    
    passport.use(
        new JwtStrategy(options, async (decoded, done) => {
            try {
                const response = await getUserById(decoded.id) ;
                    if (!response) {
                        return done(null, false)
                    
                    }
                return done(null, decoded)
            } catch (error) {
                /* handle error */
                return done(error, false)
            }

        })
    )
}
