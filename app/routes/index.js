const router = require("express").Router();
const pembayaranRoute = require("./pembayaran.route");
const metodeRoute = require("./metode.routes");

router.get("/", (req, res) => {
  res.json({ message: "hello from express" });
});

router.use("/", pembayaranRoute);
router.use("/", metodeRoute);

module.exports = router;
