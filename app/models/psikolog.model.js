const mongoose = require("mongoose")
const { Schema } = mongoose

const psikologSchema = new Schema({
    nama_psikolog: {
        type: String,
        required: true
    },

    jenis_kelamin: {
        type: String,
        enum: ["Laki-Laki", "Perempuan"],
        required: true
    },

    pendidikan: {
        type: String,
        required: true
    },

    pengalaman: {
        type: String,
        required: true
    },

    harga: {
        type: Number,
        required: true
    },

    deskripsi: {
        type: String,
        text: true,
        required: true
    },

    image_url: {
        type: String,
        required: true,
    },

    layanan: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Layanan"
        }
    ]
})

const Psikolog = mongoose.model("Psikolog", psikologSchema)

module.exports = Psikolog