const uuid = require('uuid') ;
const sendOrder = require('../libs/sendEmail');

const Order = require("../models/order.models");
const Property = require("../models/property.models");
const Users = require('../models/user.models');
const { filterGetProperties } = require('../properties/properties.services');

const buyProperty = async (data) => {
    const property= await filterGetProperties()
     const idProp = property.find(e =>  e.id == data.propertyId )
     if (!idProp) {
         throw {message: "Id incorrect"}
    }
    
    const order = await Order.create({
        id: uuid.v4(),
        UserId: data.userId,
        propId: data.propertyId,
        total: data.total
    });

    const user = await Users.findOne({where:{id: data.userId}}) ;
     const orderId = await Order.findOne({where: {propId: data.propertyId}});
    //
     const { firstName, lastName, email } = user ;
        const {id} = orderId ;
    const { title, location, state, rooms, baths, area } = property ;
     sendOrder({firstName, lastName, email, id , title, location, state, rooms, baths, area});
    
     return order
} ;

const getMyOrder = async (data) => {
    const order = await Order.findAll(
        {
            where:{UserId : data.userId },
        }) ;

    const response = order.map( o => o.propId )
    // console.log(response);
    const property = await filterGetProperties()
    // const dataProperty = property.find( e => e.id == ) ;
    for (let i = 0; i<response.length; i++){
       const dataProperty = property.find( e => e.id == response[i] )
        return { result: dataProperty }
    }

} ;

module.exports = {
    buyProperty,
    getMyOrder
}
