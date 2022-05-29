const router = require("express").Router()
const {allUser, userById, newUser, signUp} = require("./usersController")
const {validatorNewUser} = require("../validaciones/users");


router.get("/", allUser);

router.get("/:id", userById);

router.post("/login", signUp);

router.post ("/register",  validatorNewUser, newUser)






module.exports = router