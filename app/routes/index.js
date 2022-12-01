const router = require("express").Router();
const klinikRoute = require("./klinik.route");
const pembayaranRoute = require("./pembayaran.route");
const metodeRoute = require("./metode.routes");

router.get("/", (req, res) => {
  res.json({ message: "hello from express" });
});

router.use("/", klinikRoute);
router.use("/layanan", require("./layanan.route"));
router.use("/", pembayaranRoute);
router.use("/", metodeRoute);

module.exports = router;
