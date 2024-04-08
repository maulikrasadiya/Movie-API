const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './views/uploads')
    },
    filename : (req,file,cb) => {
        const renameFile = Date.now() + '-' + Math.round(Math.random() * 1E2) + file.originalname;
        cb(null, renameFile)
    }
})

const fileUpload = multer({storage})

module.exports = fileUpload;