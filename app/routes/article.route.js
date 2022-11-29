const router = require("express").Router();

const {
	getArticles,
	getArticle,
	addArticle,
	updateArticle,
	deleteArticle,
	deleteArticles,
} = require("../controllers/article.controller");

const verifyToken = require("../middleware/verifyToken.js");
const verifyUser = require("../middleware/verifyUser.js");

router.get("/articles", getArticles);
router.get("/articles/:slug", getArticle);

router.post("/articles", verifyToken, verifyUser, addArticle);
router.put("/articles/:slug", verifyToken, verifyUser, updateArticle);
router.delete("/articles/:slug", verifyToken, verifyUser, deleteArticle);
router.delete("/articles", verifyToken, verifyUser, deleteArticles);

module.exports = router;
