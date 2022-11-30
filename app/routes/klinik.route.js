const router = require("express").Router();

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const {
  getAllKlinik,
  getKlinikById,
  postKlinik,
  updateKlinikById,
  delAllKlinik,
  delKlinikById,
} = require("../controllers/klinik.controller");

router.get("/klinik", getAllKlinik);
router.get("/klinik/:id", getKlinikById);

router.post("/klinik", verifyToken, verifyUser, postKlinik);
router.put("/klinik/:id", verifyToken, verifyUser, updateKlinikById);
router.delete("/klinik", verifyToken, verifyUser, delAllKlinik);
router.delete("/klinik/:id", verifyToken, verifyUser, delKlinikById);

module.exports = router;
