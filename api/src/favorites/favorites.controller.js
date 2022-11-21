const Review = require('../models/review.models')
const User = require('../models/user.models')
const Property = require('../models/property.models')
const Favorites = require('../models/favorites.models')


const getMyFavorites = async (userId) => {
    const favorites = await Favorites.findAll({where:{UserId:userId}}) 
    return favorites
}   

const createFavorite = async (data) => {
    const newFavorite = await Favorites.create({UserId:data.userId,PropertyId:data.propertyId})
    return newFavorite
}

const deleteMyFavorite = async (favoriteId,user) => {
    //is lacking implements user filter
    await Favorites.destroy({ where: { id:favoriteId } })
    return "Favorite deleted"
}

const deleteFavorite = async (favoriteId) => {
    await Favorites.destroy({ where: { id:favoriteId } })
    return "Favorite deleted"
}

const getAllFavorites = async () => {
    const allFavorites = await Favorites.findAll()
    return allFavorites
}

 
module.exports = {
    getAllFavorites, 
    deleteFavorite, 
    deleteMyFavorite, 
    createFavorite,
    getMyFavorites
}

