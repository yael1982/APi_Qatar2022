const router = require("express").Router()
const {allPaises, paisById, paisByGrupo, editPaisByName, deletePaisById, getPaisByDt, getAllDt} = require ("./teamsController");
const isAuth = require ("../middelwares/isAuth");




router.get("/", allPaises);

router.get("/:id", paisById);

router.get("/equipo/:grupo", paisByGrupo);

router.get("/dt/:dt", getPaisByDt);
 
router.patch("/:pais", isAuth, editPaisByName);

router.delete("/:id", deletePaisById);

module.exports = router;
