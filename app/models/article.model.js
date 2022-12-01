const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	slug: {
		type: String,
		required: true,
		unique: true,
	},
	desc: {
		type: String,
		required: true,
		text: true,
	},
	image: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	author_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	author: {
		type: String,
		required: true,
	},
	category: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
		},
	],
});

module.exports = mongoose.model("Article", articleSchema);
