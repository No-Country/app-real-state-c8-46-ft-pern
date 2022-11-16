const db = require('../database/database')

const { DataTypes } = require('sequelize')
const Properties = require('./property.models')
const Users = require('./user.models')

const Favorites = db.define('favorites', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users
        }
    },
    propertyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Properties
        }
    }
})

module.exports = Favorites