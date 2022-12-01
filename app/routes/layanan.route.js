const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const {
	getAllLayanan,
	getLayananID,
	addLayanan,
	updateLayanan,
	deleteLayananID,
	deleteAllLayanan,
} = require("../controllers/layanan.controller");

router.get("/", getAllLayanan);
router.get("/:id", getLayananID);

router.post("/", verifyToken, verifyUser, addLayanan);
router.put("/:id", verifyToken, verifyUser, updateLayanan);
router.delete("/:id", verifyToken, verifyUser, deleteLayananID);
router.delete("/", verifyToken, verifyUser, deleteAllLayanan);

module.exports = router;
