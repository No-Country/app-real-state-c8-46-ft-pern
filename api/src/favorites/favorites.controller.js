// const Review = require('../models/review.models')
// const User = require('../models/user.models')
// const Property = require('../models/property.models')
const Favorites = require('../models/favorites.models')
const { filterGetProperties } = require('../properties/properties.services')


const getMyFavorites = async (userId) => {
        const favorites = await Favorites.findAll(
        {
            where:{UserId : userId },
        }) ;

    const response = favorites.map( o => o.propId )
    const property = await filterGetProperties()

    let res = []

    for (let i = 0; i<response.length; i++){
       const dataProperty = property.find( e => e.id == response[i] )
         res.push(dataProperty) 
    }
    return res
}   

const createFavorite = async (data) => {
    const property = await filterGetProperties() ;
    
 const idProp = property.find(e =>  e.id == data.propertyId )
     if (!idProp) {
         throw {message: "Id incorrect"}
    }
    
    const newFavorite = await Favorites.create({
        UserId: data.userId,
        propId: data.propertyId,
    });

    const favoriteId = await Favorites.findOne({where: {propId: data.propertyId}}) ;
    const {id} = favoriteId ;
    // const newFavorite = await Favorites.create({UserId:data.userId,PropertyId:data.propertyId})


    return { id, property: idProp }
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

