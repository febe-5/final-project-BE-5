const mongoose = require("mongoose");
const { Schema } = mongoose;

const pembayaranSchema = new Schema({
  // bukti_bayar: { type: String, default: "" },
  id_order: { type: String },
  id_psikolog: {
    type: mongoose.ObjectId,
    ref: "Psikolog",
  },
  id_user: {
    type: mongoose.ObjectId,
    ref: "user",
  },
  jadwal: String,
  id_metode: {
    type: mongoose.ObjectId,
    ref: "metode",
  },
  response_midtrans: {
    type: Object,
  },
});

const Pembayaran = mongoose.model("pembayaran", pembayaranSchema);

module.exports = Pembayaran;
