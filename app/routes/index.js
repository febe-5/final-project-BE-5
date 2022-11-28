const router = require("express").Router();

router.get("/", (req, res) => {
	res.json({ message: "hello from express" });
});

router.use("/layanan", require("./layanan.route"));

module.exports = router;
