const multer = require("multer");
console.log("Estamos en el manejador de archivos")

const files = multer.diskStorage({
destination: (req, file, callback)=> {
    const pathFiles = `${__dirname}/../static`
    callback(null, pathFiles)
},
filename: (req, file, callback)=>{
    const ext = file.originalname.split(".").pop()
    const filename = `img-${Date.now()}.${ext}`
    callback(null, filename)
console.log(filename)
}
});
//middleware
const fileUpload = multer ({ storage: files });


module.exports = fileUpload