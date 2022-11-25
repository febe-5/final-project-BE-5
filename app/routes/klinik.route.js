const router = require("express").Router();
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
router.post("/klinik", postKlinik);
router.put("/klinik/:id", updateKlinikById);
router.delete("/klinik", delAllKlinik);
router.delete("/klinik/:id", delKlinikById);

module.exports = router;
