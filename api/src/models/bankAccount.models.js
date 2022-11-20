const db = require('../database/database')

const { DataTypes } = require('sequelize')
const Users = require('./user.models')

const bankAccount = db.define('BankAccounts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    numberAccount: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'number_account'
    },
    expired: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    found:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cvv:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

module.exports = bankAccount
