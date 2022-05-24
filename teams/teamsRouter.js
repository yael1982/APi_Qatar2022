const router = require("express").Router()
const {allPaises, paisById, paisByGrupo, editPaisByName, deletePaisById, getPaisByDt} = require ("./teamsController")




router.get("/", allPaises);

router.get("/:id", paisById);

router.get("/equipo/:grupo", paisByGrupo);

router.get("/dt/:dt", getPaisByDt)

router.patch("/:pais", editPaisByName);

router.delete("/:id", deletePaisById);

module.exports = router
