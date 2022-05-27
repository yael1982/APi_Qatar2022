const router = require("express").Router()
const {allUser, userById, newUser, signUp} = require("./usersController")



router.get("/", allUser);

router.get("/:id", userById);

router.post("/login", signUp);

router.post ("/register", newUser)



//router.patch("/edit", editUser)



module.exports = router