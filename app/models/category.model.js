const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
	nama: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Category", categorySchema);
