const multer = require('multer') ;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}.png`)
    }
}) ;

const upload = multer({storage}) ;

module.exports = upload

