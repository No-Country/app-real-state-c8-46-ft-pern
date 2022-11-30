const uuid = require('uuid') ;
const sendOrder = require('../libs/sendEmail');

const Order = require("../models/order.models");
const Property = require("../models/property.models");
const Users = require('../models/user.models');

const buyProperty = async (data) => {
    const property= await Property.findOne({where:{ id: data.propertyId}})
    if (!property) {
        throw "Id incorrect"
    }
    const order = Order.create({
        id: uuid.v4(),
        UserId: data.userId,
        PropertyId: data.propertyId,
        total: data.total
    });

    const user = await Users.findOne({where:{id: data.userId}}) ;
    const { firstName, lastName, email } = user ;
    sendOrder({firstName, lastName, email});

    return order
} ;

const getMyOrder = async (data) => {
    const order = await Order.findAll({where: {UserId : data.userId }}) ;

    return order
} ;

module.exports = {
    buyProperty,
    getMyOrder
}
