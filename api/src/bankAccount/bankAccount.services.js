const bankAccountController = require('../bankAccount/bankAccount.controllers') ;

const createBankAccount = async (req, res) => {

    const userId = req.user.id ;
    const {numberAccount, expired, found, cvv } = req.body ;

    if (numberAccount && expired && found && cvv) {
        bankAccountController.addBankAccount({ numberAccount, expired, found, cvv, userId })
            .then( response => {
                res.status(201).json(response)
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
