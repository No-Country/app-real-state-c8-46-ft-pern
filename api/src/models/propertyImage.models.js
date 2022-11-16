const db = require('../database/database')

const { DataTypes } = require('sequelize')
const Properties = require('./property.models')

const PropertyImage = db.define('PropertyImages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = PropertyImage