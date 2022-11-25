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
const createProperty = async (data,userId) => {

    const newProperty = 
    await Property
    .create({
            id: uuid.v4(),
            creatorId: userId,
            ...data
            })
    return newProperty
}

const deleteMyProperty = async (propertyId,userId) => {

    const myProperty = await Property.findOne({where: {creatorId:userId}})
    await myProperty.destroy({ where: { id:propertyId } })
    return "Property deleted"

}

const editMyProperty = async (propertyId,userId,data) => {

    await Property.update(data,{
        where: {
            id:propertyId,
            creatorId:userId
        }
    })
    return "Property edited"
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
    return "Property edited"

}

const deleteProperty = async (propertyId) => {

    await Property.destroy({ where: { id:propertyId } })
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

