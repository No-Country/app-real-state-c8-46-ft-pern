const Users = require('./user.models')
const bankAccount = require('./bankAccount.models')
const Favorites = require('./favorites.models')
const Review = require('./review.models')
const propertyImage = require('./propertyImage.models')
const Property = require('./property.models')

const initModels =  () => {

    //Relationships
    //backAccount 
    bankAccount.belongsTo(Users)

    //Favorites
    Favorites.belongsTo(Users)
    Favorites.belongsTo(Property)

    //propertyImage
    propertyImage.belongsTo(Property)

    //Review 
    Review.belongsTo(Users)
    Review.belongsTo(Property)

    //Users Relationships
    Users.hasMany(Favorites)
    Users.hasMany(Review)
    Users.hasOne(bankAccount)
    /* Users.hasMany(Property) */

    //Property 
    Property.hasMany(propertyImage)
    Property.hasMany(Review)
    Property.hasMany(Favorites)
    /* Property.belongsTo(Users) */

    
    Users.belongsToMany(Property,{through:'userProperties'})
    Property.belongsToMany(Users,{through:'userProperties'}) 




};

module.exports = initModels

