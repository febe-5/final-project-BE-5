const router = require("express").Router();

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
router.post("/", addLayanan);
router.put("/:id", updateLayanan);
router.delete("/:id", deleteLayananID);
router.delete("/", deleteAllLayanan);

module.exports = router;