const Property = require('../models/property.models');
const orderController = require('./order.controllers') ;

const postOrder = async (req, res) => {
    const userId = req.user.id ;
    const propertyId = req.params.property_id
    const {total} = req.body ;

    if (total) {
         orderController.buyProperty({userId, propertyId, total})
            .then(response => {
                res.status(201).json(response)
            })
           .catch( err => {
            res.json({message: err.message})
        } )

    }else {
        res.status(400).json({message: "failed to created"})
    }
           
} ;

module.exports = {
    postOrder
}
