const propertyController = require('./property.controller') ;

const getMyProperties = async(req,res) => {

    propertyController.getMyProperties(req.user.id)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
    
}

const createProperty = async(req,res) => {
    
    const {name,address,status} = req.body;

    if (name,address,status) {
        propertyController.createProperty({name,address,status })
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
                name: "String",
                address: "String",
                status: "String",
            }
        })
    }

}
const deleteMyProperty = async(req,res) => {

    const {propertyId} = req.params
    propertyController.deleteMyProperty(propertyId,{user:req.user})
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })

}
const editMyProperty =async (req,res) => {
    const {propertyId} = req.params
    const {name,address,status} = req.body
    propertyController.editMyProperty(propertyId,{name,address,status},{user:req.user})
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })

}
const getPropertyById = async(req,res) => {
    const {propertyId} = req.params
    propertyController.getPropertyById(propertyId)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
}
const editProperty = async(req,res) => {
    const {propertyId} = req.params
    const {name,address,status} = req.body
    propertyController.editProperty(propertyId,{name,address,status})
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
}
const deleteProperty = async(req,res) => {
    const {propertyId} = req.params
    propertyController.deleteProperty(propertyId)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
}
const getAllProperties = async(req,res) => {
    propertyController.getAllProperties()
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
}
module.exports = {
    getMyProperties,
    createProperty,
    deleteMyProperty,
    editMyProperty,
    getPropertyById,
    editProperty,
    deleteProperty,
    getAllProperties,
}
