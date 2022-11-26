const router = require("express").Router();

const {
  getAllPembayaran,
  getPembayaranByID,
  postPembayaran,
  delPembayaranByID,
  delAllPembayaran,
  updatePembayaranById,
} = require("../controllers/pembayaran.controller");

router.post("/pembayaran", postPembayaran);
router.get("/pembayaran/:id", getPembayaranByID);
router.put("/pembayaran/:id", updatePembayaranById);
router.delete("/pembayaran/:id", delPembayaranByID);

router.get("/pembayaran", getAllPembayaran);
router.delete("/pembayaran", delAllPembayaran);

module.exports = router;
