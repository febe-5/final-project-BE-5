const router = require("express").Router();

const {
	getCategories,
	getCategory,
	addCategory,
	updateCategory,
	deleteCategory,
	deleteCategories,
} = require("../controllers/category.controller");

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

router.get("/categories", getCategories);
router.get("/categories/:id", getCategory);

router.post("/categories", verifyToken, verifyUser, addCategory);
router.put("/categories/:id", verifyToken, verifyUser, updateCategory);
router.delete("/categories/:id", verifyToken, verifyUser, deleteCategory);
router.delete("/categories", verifyToken, verifyUser, deleteCategories);

module.exports = router;
