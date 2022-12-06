const Users = require('./user.models')
const BankAccount = require('./bankAccount.models')
const Favorites = require('./favorites.models')
const Review = require('./review.models')
// const propertyImage = require('./propertyImage.models')
const Property = require('./property.models')
const Orders = require('./order.models')

const initModels =  () => {

    //TODO:Relationships
    //backAccount 
    BankAccount.belongsTo(Users)

    //Favorites
    Favorites.belongsTo(Users)
    Favorites.belongsTo(Property)

    //propertyImage
    // Property.belongsTo(propertyImage)

    //Review 
    Review.belongsTo(Users)
    Review.belongsTo(Property)

    //Users Relationships
    Users.hasMany(Favorites)
    Users.hasMany(Review)
    Users.hasOne(BankAccount)
    Users.hasMany(Orders)
    /* Users.hasMany(Property) */

    //Property 
    // propertyImage.hasMany(Property)
    Property.hasMany(Review)
    Property.hasMany(Favorites)
    Property.hasOne(Orders)
    /* Property.belongsTo(Users) */

    
    Users.belongsToMany(Property,{through:'userProperties'})
    Property.belongsToMany(Users,{through:'userProperties'}) 


    //Order
    Orders.belongsTo(Users)
    Orders.belongsTo(Property)


};

module.exports = initModels

