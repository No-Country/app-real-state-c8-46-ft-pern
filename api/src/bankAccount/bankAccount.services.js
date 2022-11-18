const bankAccountController = require('../bankAccount/bankAccount.controllers') ;

const createBankAccount = async (req, res) => {

    const userId = req.user.id ;
    const {id, numberAccount, expired, propertyId, found, cvv } = req.body ;

    if (id && numberAccount && expired && propertyId && found && cvv) {
        bankAccountController.addBankAccount({id, numberAccount, expired, propertyId, found, cvv, userId })
            .then( res => {
                res.status(201).json(res)
            } )
            .catch(err => {
                res.json({message: err.message})
            })
    }else{
        res.json({
            message: "missing data",
            fields: {
                numberAccount: "String",
                expired: "String",
                propertyId: "String",
                found: "Float",
                cvv: "String"
            }
        })
    }
    
} ;

module.exports = {
    createBankAccount
}
