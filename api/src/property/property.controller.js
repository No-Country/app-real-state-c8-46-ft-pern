const Review = require('../models/review.models')
const User = require('../models/user.models')
const Property = require('../models/property.models')
const uuid = require('uuid') ;
const { Sequelize, where } = require('sequelize');

const getMyProperties = (userId) => {
    const myProperties =  Property.findAll({
        where: {
            creator_id: userId
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
            photosProperty:[`http://localhost:3009/public/${data.imageProp}`] ,
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

const addImage = async (data) => {
    const property = await Property.update(
                    {
                        'photosProperty': Sequelize.fn(`array_append`, Sequelize.col('photos_property'), `http://localhost:3009/public/${data.image}`)
                    }, {
                        where: {id: data.propertyId}
                    }) ;

    return  'Imagen subida exitosamente'
} ;


 
module.exports = {
    createProperty,
    deleteMyProperty,
    editMyProperty,
    getPropertyById,
    editProperty,
    deleteProperty,
    getAllProperties,
    getMyProperties,
    addImage
}

