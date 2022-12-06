const db = require("../database/database")

const { DataTypes } = require('sequelize')

const Order = db.define('Orders', {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false 
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    propId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
   
})

module.exports = Order
