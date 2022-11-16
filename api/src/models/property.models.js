const db = require("../database/database")

const { DataTypes } = require('sequelize')
const Users = require("./user.models")

const Properties = db.define('properties', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    },
    creator: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users
        }
    }
})

module.exports = Properties