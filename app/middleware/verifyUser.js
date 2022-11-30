const User = require("../models/user.model");

module.exports = async (req, res, next) => {
	const { _id } = req.user;

	try {
		const user = await User.findOne({ _id });

		if (!user.isAdmin)
			return res
				.status(403)
				.send({ status: "fail", message: "user doesn't have access" });

		next();
	} catch (error) {
		res
			.status(500)
			.send({
				status: "fail",
				message: error.message || "internal server error",
			});
	}
};
