const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	nama: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	umur: {
		type: Number,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
