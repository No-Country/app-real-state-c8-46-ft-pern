const Review = require('../models/review.models')
const User = require('../models/user.models')
const Property = require('../models/property.models')
const uuid = require('uuid') ;

const getMyProperties = async (userId) => {
    const myProperties = await Property.findAll({
        include: 
          {
            model: User,
            where:{
                id:userId
            }
          }
      })
      return myProperties
}
const createProperty = async (data) => {
    const newProperty = 
    await Property
    .create({
            id: uuid.v4(),
            name: data.name,
            addres : data.addres,
            creatorId : data.userId,
            status : data.status 
            })
    return newProperty
}

const deleteMyProperty = async (propertyId) => {
//is lacking implements user filter
    await Property.destroy({ where: { id:propertyId } })
    return "Property deleted"

}

const editMyProperty = async (propertyid,data,user) => {
//is lacking implements user filter
    await Property.update(data,{
        where: {
            id:propertyid
        }
    })
    return "Property deleted"
}

const getPropertyById = async (propertyId) => {
    
    const propertyById = await Property.findByPk(propertyId)
    return propertyById

}

const editProperty = async (propertyid,data) => {

    await Property.update(data,{
        where: {
            id:propertyid
        }
    })
    return "Property edit"

}

const deleteProperty = async (propertyId) => {

    await Property.destroy({ where: { id:propertyId , } })
    return "Property deleted"

}

const getAllProperties = async (req,res) => {
    const allProperties = await Property.findAll()
    return allProperties
}


 
module.exports = {
    createProperty,
    deleteMyProperty,
    editMyProperty,
    getPropertyById,
    editProperty,
    deleteProperty,
    getAllProperties,
    getMyProperties
}

