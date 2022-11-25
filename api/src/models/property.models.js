const db = require("../database/database")

const { DataTypes } = require('sequelize')
const Users = require("./user.models")

const Property = db.define('Properties', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false 
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    },
    lat:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lon:{
        type: DataTypes.STRING,
        allowNull: false
    },
    purpose:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    product:{
        type: DataTypes.STRING,
        allowNull: false
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false
    },
    rentFrequency:{
        type: DataTypes.STRING,
        allowNull: false
    },
    rooms:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    baths:{
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    area:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    contactName:{
        type: DataTypes.STRING,
        allowNull: false
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
