const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "hello from express" });
});

// put your route here
router.use("/", require("./user.route"));
router.use("/", require("./article.route"));
router.use("/", require("./category.route"));
router.use("/", require("./klinik.route"));
router.use("/", require("./pembayaran.route"));
router.use("/", require("./metode.routes"));
router.use("/layanan", require("./layanan.route"));
router.use("/psikolog", require("./psikolog.route"));

module.exports = router;
