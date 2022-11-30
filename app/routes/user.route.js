const router = require("express").Router();

const {
	register,
	login,
	showProfile,
	updateProfile,
	getAllUser,
	getUser,
	updateUserRole,
	deleteUser,
} = require("../controllers/user.controller");

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const { validateRegister, validateLogin } = require("../middleware/validation");

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

router.get("/profile", verifyToken, showProfile);
router.put("/profile", verifyToken, updateProfile);

router.get("/users", verifyToken, verifyUser, getAllUser);
router.get("/users/:id", verifyToken, verifyUser, getUser);
router.put("/users/:id", verifyToken, verifyUser, updateUserRole);
router.delete("/users/:id", verifyToken, verifyUser, deleteUser);

module.exports = router;
