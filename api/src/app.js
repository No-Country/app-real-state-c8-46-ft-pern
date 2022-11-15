const express = require('express')
const {port} = require('./config')

const db = require('./database/database')

const app = express()

app.use(express.json())

app.get('/', (req, res)=> {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
})


const userRouter =  require('./users/users.router');
const authRouter = require('./auth/auth.router')
const initModels = require('./models/init.models')

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth',authRouter)

db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err);
    })

db.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch( err => {
        console.log(err);
    } )

initModels()

app.listen(port, () => {
    console.log(`server on port ${port}`)
})



