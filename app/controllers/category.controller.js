const Category = require("../models/category.model.js");

module.exports = {
	getCategories: async (req, res) => {
		try {
			const categories = await Category.find();

			res.send({
				status: "success",
				message: "all categories found",
				data: categories,
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},
	getCategory: async (req, res) => {
		const _id = req.params.id;
		try {
			const category = await Category.findOne({ _id });

			if (!category)
				return res
					.status(404)
					.send({ status: "fail", message: "category not found" });

			res.send({
				status: "success",
				message: "category found",
				data: category,
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},
	addCategory: async (req, res) => {
		if (!req.body)
			return res
				.status(400)
				.send({ status: "fail", message: "body can't be empty" });
		try {
			const { nama } = req.body;

			const categories = await Category.find();

			const checker = categories.filter(
				(category) => category.nama.toLowerCase() == nama.toLowerCase()
			);

			if (checker.length > 0)
				return res
					.status(400)
					.send({ status: "fail", message: "category already exists" });

			const category = new Category({ nama });
			await category.save();

			res.status(201).send({
				status: "success",
				message: "new category created successfully",
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	updateCategory: async (req, res) => {
		const _id = req.params.id;
		if (!req.body)
			return res
				.status(400)
				.send({ status: "fail", message: "body can't be empty" });
		try {
			const category = await Category.findOne({ _id });
			if (!category)
				return res
					.status(404)
					.send({ status: "fail", message: "category not found" });

			const { nama } = req.body;

			const categories = await Category.find();

			const checker = categories.filter(
				(e) => e.nama.toLowerCase() == nama.toLowerCase()
			);

			if (checker.length > 0)
				return res
					.status(400)
					.send({ status: "fail", message: "category already exists" });

			await Category.findOneAndUpdate({ _id }, { nama });
			res.send({ status: "success", message: "category updated successfully" });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	deleteCategory: async (req, res) => {
		const _id = req.params.id;

		try {
			const category = await Category.findOne({ _id });

			if (!category)
				return res
					.status(404)
					.send({ status: "fail", message: "category not found" });

			await Category.deleteOne({ _id });
			res.send({ status: "success", message: "category deleted successfully" });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},
	deleteCategories: async (req, res) => {
		try {
			await Category.deleteMany();
			res.send({
				status: "success",
				message: "all categories deleted successfully",
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},
};
