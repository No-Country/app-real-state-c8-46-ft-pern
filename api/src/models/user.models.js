const db = require('../database/database')

const { DataTypes } = require('sequelize')

const Users = db.define('Users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'normal'
    },
    profileImage:{
        type: DataTypes.STRING,
        defaultValue: null
    },
    wallet:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0
    },
    isValidate:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    token:{
        type: DataTypes.STRING,
        
    },
})

module.exports = Users
