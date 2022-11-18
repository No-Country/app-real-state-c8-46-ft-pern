const BankAccount = require('../models/bank_account.models')
const uuid = require('uuid')

const addBankAccount = async (data) => {
    const newBankAccount= await BankAccount.create({
        id: uuid.v4(),
        numberAccount: data.numberAccount,
        expired: data.expired,
        propertyId: data.userId,
        found: data.found,
        cvv: data.cvv 
    })

    return newBankAccount
    
}



module.exports = {
    addBankAccount
}


