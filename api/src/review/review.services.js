const reviewController = require('./review.controller') ;

const createReview = async (req, res) => {

    const {message,userId,propertyId} = req.body;

    if (message,userId,propertyId) {
        reviewController.createReview({message,propertyId,userId })
            .then( result => {
                res.status(201).json(result)
            } )
            .catch(err => {
                res.json({message: err.message})
            })
    }else{
        res.json({
            message: "missing data",
            fields: {
                message: "String",
                propertyId: "UUID",
                userId: "UUID",
            }
        })
    }
    
} ;

const getAllReviews = async (req,res) => {

        reviewController.getAllReviews()
            .then( result => {
                res.status(201).json(result)
            } )
            .catch(err => {
                res.json({message: err.message})
            })
}

const getReviewById =async (req,res) => {
    const {reviewId} = req.params
    reviewController.getReviewById(reviewId)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })

}

const editReview  = async (req,res) => {
    const {reviewId} = req.params
    const {message} = req.body
    reviewController.editReview(reviewId,{message})
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })

}

const deleteReview = async (req,res)  => {
    const {reviewId} = req.params
    reviewController.deleteReview(reviewId)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })

}

const getMyReviews = async (req,res) => {
    reviewController.getReviewsByUser(req.user.id)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
}

const editMyReview = async (req,res) => {
    const {reviewId} = req.params
    const {message} = req.body
    reviewController.editReview(reviewId,{message})
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
}


const deleteMyReview = async ( req,res) => {
    const {reviewId} = req.params
    reviewController.deleteReview(reviewId)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })

}



module.exports = {
    createReview,
    getAllReviews,
    deleteMyReview,
    editMyReview,  
    getMyReviews, 
    deleteReview, 
    editReview, 
    getReviewById,
}
