const router = require("express").Router();

router.get("/", (req, res) => {
	res.json({ message: "hello from express" });
});

// put your route here
router.use("/", require("./user.route"));
router.use("/", require("./article.route"));
router.use("/", require("./category.route"));

module.exports = router;
