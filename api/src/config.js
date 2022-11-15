require('dotenv').config()

const config =  {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASWORD || 'root',
        dbName: process.env.DB_NAME 

    }
}

module.exports = config
