const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	if (!req.headers.authorization)
		return res
			.status(401)
			.send({ status: "fail", message: "don't have access" });

	const token =
		req.headers.authorization.split(" ")[1] || req.headers.authorization;

	if (!token)
		return res.status(403).send({ status: "fail", message: "forbidden" });

	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);

		if (!decoded || !decoded._id)
			return res.status(401).send({ status: "fail", message: "invalid token" });

		const user = await User.findOne({ _id: decoded._id });

		if (!user)
			return res.status(401).send({ status: "fail", message: "invalid token" });

		req.user = {
			_id: decoded._id,
			email: decoded.email,
			nama: decoded.nama,
		};

		next();
	} catch (error) {
		res.status(500).send({
			status: "fail",
			message: error.message || "internal server error",
		});
	}
};
