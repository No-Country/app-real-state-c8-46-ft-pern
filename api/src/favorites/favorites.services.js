const favoritesController = require('./favorites.controller') ;

const getMyFavorites = async (req,res) => {
    reviewController.getMyFavorites(req.user)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
}

const createFavorites = async (req,res) => {

    const {userId,propertyId} = req.body
    if (userId,propertyId) {
        favoritesController.createFavorite({userId,propertyId})
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
                propertyId: "UUID",
                userId: "UUID",
            }
        })
    }


}

const deleteMyFavorite = async (req,res) => {
    const {favoriteId} = req.params
    favoritesController.deleteMyFavorite(favoriteId,req.user)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
}


const deleteFavorite = async (req,res) => {
    const {favoriteId} = req.params
    favoritesController.deleteFavorite(favoriteId)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
}

const getAllFavorites = async (req,res) => {

    favoritesController.getAllFavorites ()
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
}

 
module.exports = {
    getMyFavorites,
    createFavorites,
    deleteMyFavorite,
    deleteFavorite,
    getAllFavorites

}

