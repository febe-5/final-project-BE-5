const mongoose = require("mongoose");
const { Schema } = mongoose;

const klinikSchema = new Schema({
  url_gambar: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  lokasi: {
    type: String,
    required: true,
  },
  profil: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  no_telp: {
    type: String,
    required: true,
  },
});

const Klinik = mongoose.model("klinik", klinikSchema);

module.exports = Klinik;
