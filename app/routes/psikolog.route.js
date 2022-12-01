const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const {
	getAllPsikolog,
	getPsikologID,
	addPsikolog,
	updatePsikolog,
	deletePsikologID,
	deleteAllPsikolog,
} = require("../controllers/psikolog.controller");

router.get("/", getAllPsikolog);
router.get("/:id", getPsikologID);

router.post("/", verifyToken, verifyUser, addPsikolog);
router.put("/:id", verifyToken, verifyUser, updatePsikolog);
router.delete("/:id", verifyToken, verifyUser, deletePsikologID);
router.delete("/", verifyToken, verifyUser, deleteAllPsikolog);

module.exports = router;
