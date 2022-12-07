const propertyController = require('./property.controller') ;

const getMyProperties = async(req,res) => {

    propertyController.getMyProperties(req.user.id)
    .then( result => {
        res.status(200).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })
    
}

const createProperty = (req,res) => {
    
    const userId = req.user.id ;
     const imageProp = req.file.filename ;
    const {title,address,lat,lon,purpose,price,product,category,rentFrequency,rooms,baths,area,contactName} = req.body;

    if (title && address && lat && lon && purpose && price && product && category && rentFrequency && rooms && baths && area && contactName && req.file) {
        propertyController.createProperty({title,address,lat,lon,purpose,price,product,category,rentFrequency,rooms,baths,area,contactName, imageProp},userId)
            .then( result => {
                res.status(201).json(result)
            } )
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    }else{
        res.json({
            message: "missing data",
            fields: {
                title:  "STRING",
                address:  "STRING",
                lat: "STRING",
                lon: "STRING",
                purpose: "STRING",
                price:"FLOAT",
                product:"STRING",
                category:"STRING",
                rentFrequency:"STRING",
                rooms:"INTEGER",
                baths:"INTEGER",
                area: "FLOAT",
                contactName: "STRING",
            }
        })
    }

}
const deleteMyProperty = async(req,res) => {

    const {propertyId} = req.params
    propertyController.deleteMyProperty(propertyId,req.user.id)
    .then( result => {
        res.status(201).json(result)
    } )
    .catch(err => {
        res.json({message: err.message})
    })

}
const editMyProperty =async (req,res) => {
    const {propertyId} = req.params
    const {title,address,lat,lon,purpose,price,product,category,rentFrequency,rooms,baths,area,contactName} = req.body
    propertyController.editMyProperty(propertyId,req.user.id,{title,address,lat,lon,purpose,price,product,category,rentFrequency,rooms,baths,area,contactName})
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
    const {title,address,lat,lon,purpose,price,product,category,rentFrequency,rooms,baths,area,contactName} = req.body
    propertyController.editProperty(propertyId,{title,address,lat,lon,purpose,price,product,category,rentFrequency,rooms,baths,area,contactName})
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


const addImage = (req, res) => {
    const image = req.file.filename
    const propertyId = req.params.propertyId ;

    propertyController.addImage({image, propertyId})
        .then(response => {
            res.json({response})
        })
        .catch(err => {
            res.json({message: err.message})
        })
    
} ;

module.exports = {
    getMyProperties,
    createProperty,
    deleteMyProperty,
    editMyProperty,
    getPropertyById,
    editProperty,
    deleteProperty,
    getAllProperties,
    addImage
}
