const db = require('../database/database')

const { DataTypes } = require('sequelize')
const Properties = require('./property.models')

const PropertyImages = db.define('property_images', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    propertyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Properties
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = PropertyImages