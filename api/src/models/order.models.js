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
    }
   
})

module.exports = Order
