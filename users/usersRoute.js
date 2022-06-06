const router = require("express").Router()
const {allUser, userById, newUser, signUp} = require("./usersController")
const {validatorNewUser} = require("../validaciones/users");
const fileUpload = require("../utils/handleFiles");


router.get("/", allUser);

router.get("/:id", userById);

router.post("/login", signUp);

router.post("/register", fileUpload.single("file"), validatorNewUser, newUser)






module.exports = router