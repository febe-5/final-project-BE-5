const Pembayaran = require("../models/pembayaran.model");

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
      const pembayaran = new Pembayaran({ ...data });
      pembayaran.save();

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
      const data = await Pembayaran.findById(id);
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
