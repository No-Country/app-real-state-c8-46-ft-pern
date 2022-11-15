const db = require('../database/database')

const { DataTypes } = require('sequelize')
const Users = require('./user.models')

const Review = db.define('review', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
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
        references: {
            key: 'id',
            model: Property
        }
    }
    
})

module.exports = Review
