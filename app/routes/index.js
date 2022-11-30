const router = require("express").Router();
const klinikRoute = require("./klinik.route");

router.get("/", (req, res) => {
  res.json({ message: "hello from express" });
});


// put your route here
router.use("/", require("./user.route"));
router.use("/", require("./article.route"));
router.use("/", require("./category.route"));
router.use("/", klinikRoute);
router.use("/layanan", require("./layanan.route"));
router.use("/psikolog", require("./psikolog.route"));

module.exports = router;
