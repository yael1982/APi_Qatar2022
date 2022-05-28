const router = require("express").Router()
const {allUser, userById, newUser, signUp} = require("./usersController")
const {validatorUser} = require("../validaciones/users");
const fileUpload = require("../utils/handleStorage");


router.get("/", allUser);

router.get("/:id", userById);

router.post("/login", signUp);

router.post ("/register", fileUpload.single("file"), validatorUser, newUser)






module.exports = router