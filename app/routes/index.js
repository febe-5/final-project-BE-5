const router = require("express").Router();
const klinikRoute = require("./klinik.route");

router.get("/", (req, res) => {
  res.json({ message: "hello from express" });
});

router.use("/", klinikRoute);
// put your route here

module.exports = router;
