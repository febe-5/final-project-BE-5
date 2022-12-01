const Article = require("../models/article.model");

module.exports = {
	getArticles: async (req, res) => {
		try {
			const articles = await Article.find({}, "-author_id");

			res.send({
				status: "success",
				message: "all articles found",
				data: articles,
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	getArticle: async (req, res) => {
		const { slug } = req.params;
		try {
			const article = await Article.findOne({ slug }, "-author_id");

			if (!article)
				return res
					.status(404)
					.send({ status: "fail", message: "article not found" });

			res.send({ status: "success", message: "article found", data: article });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	addArticle: async (req, res) => {
		if (!req.body)
			return res
				.status(400)
				.send({ status: "fail", message: "body can't be empty" });
		const { title, desc, image, category } = req.body;
		const author = req.user.nama;
		const author_id = req.user._id;

		const slug = title.toLowerCase().replace(/ /g, "-");
		try {
			const article = new Article({
				title,
				desc,
				image,
				category,
				slug,
				author,
				author_id,
			});

			await article.save();
			res
				.status(201)
				.send({ status: "success", message: "article created successfully" });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	updateArticle: async (req, res) => {
		const slug = req.params.slug;
		const author_id = req.user._id;

		if (!req.body)
			return res
				.status(400)
				.send({ status: "fail", message: "body can't be empty" });
		try {
			const article = await Article.findOne({ slug });

			if (!article)
				return res
					.status(404)
					.send({ status: "fail", message: "article not found" });

			if (article.author_id != author_id)
				return res.status(400).send({
					status: "fail",
					message: "can't make changes to articles that aren't yours",
				});

			const data = {
				title: req.body.title || article.title,
				desc: req.body.desc || article.desc,
				image: req.body.image || article.image,
				category: req.body.category || article.category,
			};

			data.slug = data.title.toLowerCase().replace(/ /g, "-");

			await Article.findOneAndUpdate({ slug }, data);
			res.send({ status: "success", message: "article updated successfully" });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	deleteArticle: async (req, res) => {
		const slug = req.params.slug;
		const author_id = req.user._id;
		try {
			const article = await Article.findOne({ slug });

			if (!article)
				return res
					.status(404)
					.send({ status: "fail", message: "article not found" });

			if (article.author_id != author_id)
				return res.status(400).send({
					status: "fail",
					message: "can't make changes to articles that aren't yours",
				});

			await Article.deleteOne({ slug });
			res.send({ status: "success", message: "article deleted successfully" });
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},

	deleteArticles: async (req, res) => {
		const author_id = req.user._id;
		try {
			await Article.deleteMany({ author_id });
			res.send({
				status: "success",
				message: "all your articles were successfully deleted ",
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: error.message || "internal server error",
			});
		}
	},
};
