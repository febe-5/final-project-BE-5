const User = require("../models/user.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
	register: async (req, res) => {
		if (req.validateError) {
			const error = req.validateError.details[0].message;
			res
				.status(400)
				.send({ status: "fail", message: error.replace(/"/g, "") });
		}

		try {
			const { nama, email, password, umur, isAdmin = false } = req.body;

			const emailExist = await User.findOne({ email });
			if (emailExist)
				return res
					.status(400)
					.send({ status: "fail", message: "email already exists" });

			const salt = await bcrypt.genSalt(10);
			const hashPassword = await bcrypt.hash(password, salt);

			const user = new User({
				nama,
				email,
				umur,
				isAdmin,
				password: hashPassword,
			});

			await user.save();

			res
				.status(201)
				.send({ status: "success", message: "user created successfully" });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	login: async (req, res) => {
		if (req.validateError) {
			const error = req.validateError.details[0].message;
			res
				.status(400)
				.send({ status: "fail", message: error.replace(/"/g, "") });
		}

		try {
			const { email, password } = req.body;
			const user = await User.findOne({ email });
			if (!user)
				return res
					.status(404)
					.send({ status: "fail", message: "unregistered email" });

			const validPass = await bcrypt.compare(password, user.password);
			if (!validPass)
				return res
					.status(400)
					.send({ status: "fail", message: "wrong password" });

			const token = jwt.sign(
				{ _id: user._id, nama: user.nama, email: user.email },
				process.env.SECRET_KEY
			);

			res.send({
				status: "success",
				message: "login successfully",
				accessToken: token,
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	showProfile: async (req, res) => {
		const { _id } = req.user;

		try {
			const profile = await User.findOne({ _id }, "-password -isAdmin");
			res.send({ status: "success", message: "user found", data: profile });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	updateProfile: async (req, res) => {
		const { _id } = req.user;

		try {
			const email = req.body.email;

			const emailChecker = await User.findOne({ email });

			if (emailChecker)
				return res
					.status(400)
					.send({ status: "fail", message: "email already exists" });

			const oldUser = await User.findOne({ _id });

			let hashPassword;
			if (req.body.password) {
				const salt = await bcrypt.genSalt(10);
				hashPassword = await bcrypt.hash(req.body.password, salt);
			}

			const data = {
				nama: req.body.nama || oldUser.nama,
				email: req.body.email || oldUser.email,
				umur: req.body.umur || oldUser.umur,
				password: hashPassword || oldUser.password,
			};

			await User.findOneAndUpdate({ _id }, data);
			res.send({ status: "success", message: "profile updated successfully" });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	getAllUser: async (req, res) => {
		try {
			const users = await User.find({}, "-password");

			res.send({ status: "success", message: "all users found", data: users });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	getUser: async (req, res) => {
		const { id } = req.params;
		try {
			const user = await User.findOne({ _id: id }, "-password");

			if (!user)
				return res
					.status(404)
					.send({ status: "fail", message: "user not found" });

			res.send({ status: "success", message: "user found", data: user });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	updateUserRole: async (req, res) => {
		const _id = req.params.id;

		if (!req.body)
			return res
				.status(400)
				.send({ status: "fail", message: "body can't be empty" });
		try {
			const checker = await User.findOne({ _id });

			if (!checker)
				return res
					.status(404)
					.send({ status: "fail", message: "user not found" });

			const isAdmin = req.body.isAdmin || checker.isAdmin;
			await User.findOneAndUpdate({ _id }, { isAdmin });
			res.send({
				status: "success",
				message: "user role updated successfully",
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	deleteUser: async (req, res) => {
		const _id = req.params.id;
		try {
			const checker = await User.findOne({ _id });
			if (!checker)
				return res
					.status(404)
					.send({ status: "fail", message: "user not found" });

			await User.deleteOne({ _id });
			res.send({ status: "success", message: "user deleted successfully" });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},
};
