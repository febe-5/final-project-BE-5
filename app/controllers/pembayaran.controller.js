const Pembayaran = require("../models/pembayaran.model");

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
      //data = req.user

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
      const { bukti_bayar } = update;
      const data = await Pembayaran.findByIdAndUpdate(id, {
        bukti_bayar: bukti_bayar,
      });
      const dataPsikolog = await data.populate("id_psikolog");
      const { nama_psikolog, no_telp } = dataPsikolog.id_psikolog;
      if (bukti_bayar) {
        res.json({
          status: "success",
          message: "payment success",
          data: { nama_psikolog, no_telp: `https://wa.me/${no_telp}` },
        });
      } else {
        res.status(402).json({
          status: "fail",
          message: "payment failed",
          reason: "payment method not valid",
        });
      }
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
      console.log(id);
      const transaksi = await core.transaction.status(id);
      console.log(transaksi);
      const data = await Pembayaran.findOneAndUpdate(req.params.id, {
        response_midtrans: transaksi,
      });
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
