const Review = require('../models/review.models')
const User = require('../models/user.models')
const Property = require('../models/property.models')

const getAllReviews = async () => {
    const reviewFound = await Review.findAll()
    return reviewFound
}

const getReviewById = async (reviewId) => {
    const data = await Review.findOne({
        where: {
            id:reviewId
        }
    })
    return data
    
}


const createReview = async (data) => {
    const newReview = await Review.create({
        message:data.message,

    })
     const userFound = await User.findByPk(data.userId)

    newReview.setUser(userFound)
    

    const propertyFound = await Property.findByPk(data.propertyId)
    newReview.setProperty(propertyFound)
    return newReview
    
}

 const editReview = async(id, data) => {
    const result = await Review.update(data,{
        where: {
            id
        }
    })
    return "Review Edited"  
}

const deleteReview = async (id) => {
    const data = await Review.destroy({
        where: {
            id
        }
    })

    return "Review deleted"
    
}

const getReviewsByUser = async (userId) => {

    const userWithReviews = await Review.findOne({where:{UserId:userId}})
    return userWithReviews
    
} ;
 
module.exports = {
    createReview,
    getReviewById,
    getAllReviews,
    editReview,
    deleteReview,
    getReviewsByUser,
}

