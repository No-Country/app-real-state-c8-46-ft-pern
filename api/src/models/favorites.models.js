const db = require('../database/database')

const { DataTypes } = require('sequelize')

const Favorites = db.define('favorites', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    propertyId: {
        type: DataTypes.UUID,
        allowNull: false,
    }
})

module.exports = Favorites