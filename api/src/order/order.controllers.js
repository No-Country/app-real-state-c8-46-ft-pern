const uuid = require('uuid') ;

const Order = require("../models/order.models");
const Property = require("../models/property.models");

const buyProperty = async (data) => {
    const property= await Property.findOne({where:{ id: data.propertyId}})
    if (!property) {
        return "Id incorrect"
    }
    const order = Order.create({
        id: uuid.v4(),
        UserId: data.userId,
        PropertyId: data.propertyId,
        total: data.total
    });

    return order
} ;

module.exports = {
    buyProperty
}
