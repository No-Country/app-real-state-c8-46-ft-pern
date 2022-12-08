const multer = require('multer') ;
const path = require('path') ;

//TODO: Subir archivot
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__filename, '../../images/') )
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}.png`)
    }
}) ;

const upload = multer({storage}) ;

module.exports = upload

