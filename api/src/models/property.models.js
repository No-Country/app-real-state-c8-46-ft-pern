const db = require("../database/database")

const { DataTypes } = require('sequelize')
const Users = require("./user.models")

const Property = db.define('Properties', {
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
    creatorId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "creator_id",
        references: {
            key: 'id',
            model: Users
        }
    }
})

module.exports = Property
