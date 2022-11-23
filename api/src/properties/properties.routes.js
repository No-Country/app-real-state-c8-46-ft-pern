const router = require('express').Router() ;
const {filterGetProperties} = require('./properties.services');

router.route('/')
.get(async (req,res)=>{
    try {
        const response = await filterGetProperties();
        res.send(response);
    } catch (error) {
        console.log('el error esta en esta cagada '+ error)
    }
})    

module.exports = router