const db = require('../database/database')

const { DataTypes } = require('sequelize')
const Users = require('./user.models')

const BankAccount = db.define('bank_acount', {
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
    propertyId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'property_id',
        references: {
            key: 'id',
            model: Users
        }
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

module.exports = BankAccount
