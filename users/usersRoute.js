const router = require("express").Router()
const {allUser, userById, newUser} = require("./usersController")



router.get("/", allUser);

router.get("/:id", userById);

router.post("/users", newUser);



module.exports = router