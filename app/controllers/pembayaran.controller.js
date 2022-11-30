const Pembayaran = require("../models/pembayaran.model");
const orderid = require("order-id")("key");

require("../models/psikolog.model");
require("../models/user.model");

const midtransClient = require("midtrans-client");
// Create Core API instance
let core = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: "SB-Mid-server-UWNx923VdFRYpelDXc6YuxCk",
  clientKey: "SB-Mid-client-JYT7s_8nMyHm922U ",
});

module.exports = {
  getAllPembayaran: async (req, res) => {
    try {
      const data = await Pembayaran.find()
        .populate("id_psikolog")
        .populate("id_user")
        .populate("id_metode");
      res.json({
        status: "success",
        message: "Get data success",
        data,
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  postPembayaran: async (req, res) => {
    try {
      const data = req.body;
      const order_id = orderid.generate();
      data.transaction_details.order_id = order_id;
      console.log(data);

      core.charge(data).then((chargeResponse) => {
        let dataPembayaran = {
          id_order: chargeResponse.order_id,
          id_psikolog: data.id_psikolog,
          id_user: data.id_user,
          jadwal: data.jadwal,
          id_metode: data.id_metode,
          response_midtrans: chargeResponse,
        };

        const pembayaran = new Pembayaran(dataPembayaran);
        pembayaran.save();

        console.log("chargeResponse:");
        console.log(chargeResponse);
      });

      res.json({
        status: "success",
        message: "pending payment",
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  updatePembayaranById: async (req, res) => {
    try {
      const { id } = req.params;
      const update = req.body;
      const data = await Pembayaran.findByIdAndUpdate(id, update);
      res.json({
        status: "success",
        message: "Pembayaran Updated!",
        data: update,
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  getPembayaranByID: async (req, res) => {
    try {
      const { id } = req.params;
      const resData = await Pembayaran.findOneAndUpdate(id);
      const dataPsikolog = await resData.populate("id_psikolog");
      const { nama_psikolog, no_telp } = dataPsikolog.id_psikolog;

      res.json({
        status: "success",
        message: "Get data success",
        resData,
        dataPsikolog: { nama_psikolog, no_telp: `https://wa.me/${no_telp}` },
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  delAllPembayaran: async (req, res) => {
    try {
      await Pembayaran.deleteMany();
      res.json({
        status: "success",
        message: "Delete all data success",
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  delPembayaranByID: async (req, res) => {
    try {
      const { id } = req.params;
      await Pembayaran.findByIdAndDelete(id);
      res.json({
        status: "success",
        message: "Delete data success",
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },
};
