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
    const orderId = await Order.findOne({where: {PropertyId: data.propertyId}});

    const { firstName, lastName, email } = user ;
        const {id} = orderId ;
    const { title, address, state, rooms, baths, area } = property ;
    sendOrder({firstName, lastName, email, id , title, address, state, rooms, baths, area});

    return order
} ;

const getMyOrder = async (data) => {
    const order = await Order.findAll(
        {
            where:{UserId : data.userId },

            include:[
                {
                    model:Property,
                    as: 'Property',
                    attributes: ['id', 'title', 'address', 'state', 'lat', 'lon', 'purpose', 'rooms', 'baths', 'area', 'photosProperty']
                }
            ]
        }) ;

    return order
} ;

module.exports = {
    buyProperty,
    getMyOrder
}
