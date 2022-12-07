const db = require('../database/database')

const { DataTypes } = require('sequelize')
const Properties = require('./property.models')
const Users = require('./user.models')

const Favorites = db.define('Favorites', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    propId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Favorites
