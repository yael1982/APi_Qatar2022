const multer = require("multer");

const files = multer.diskStorage({
destination: (req, file, callback)=> {
    const pathFiles = `${__dirname}/../files`
    callback(null, pathFiles)
},
filename: (req, file, callback)=>{
    const ext = file.originalname.split(".").pop()
    const filename = `img-${Date.now()}.${ext}`
    callback(null, filename)

}
});
const fileUpload = multer ({ files })

module.exports = fileUpload