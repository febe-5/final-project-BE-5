const mongoose = require("mongoose");
const { Schema } = mongoose;

const layananSchema = new Schema({
    nama_layanan: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Layanan", layananSchema);